const mongoose = require('mongoose');
const getRootUrl = require('../utils/getRootUrl');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fullName: {
      type: String,
      required: [true, 'Họ và tên không được bỏ trống'],
    },
    address: {
      type: String,
      required: [true, 'Địa chỉ không được bỏ trống'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Số điện thoại không được bỏ trống'],
    },
    status: {
      type: String,
      enum: ['PENDING', 'SHIPPING', 'SUCCESS', 'CANCELED'],
      default: 'PENDING',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    products: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Sản phẩm không được bỏ trống'],
            validate: [
              {
                // TO DO
                validator: async (v) => {},
                message: 'Sản phẩm này không tồn tại',
              },
            ],
          },
          price: {
            type: Number,
          },
          amount: {
            type: Number,
            required: [true, 'Số lượng sản phẩm không được bỏ trống'],
          },
        },
      ],
      validate: [
        {
          validator: (v) => Array.isArray(v) && v.length > 0,
          message: 'Không được bỏ trống danh sách sản phẩm',
        },
        {
          // TODO
          validator: async (v) => {},
          message: 'Sản phẩm đã hết hàng',
        },
      ],
    },
  },
  {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

orderSchema.index({ fullName: 1, phoneNumber: 1 });
orderSchema.index({ '$**': 'text' });

// add current price
orderSchema.pre('save', async function (next) {
  this.products = await Promise.all(
    this.products.map(async (productObj) => {
      const productDoc = await mongoose.models.Product.findById(
        productObj.product
      );
      return { ...productObj, price: productDoc.price };
    })
  );
  next();
});

// TODO decrease product amount

orderSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'products.product',
    select: 'name description slug -categories images',
  }).populate({
    path: 'user',
    select: 'fullName email image',
  });

  next();
});

orderSchema.methods.addImageUrl = (doc, req) => {
  const newDoc = Object.create(doc);
  if (doc.user?.image) {
    newDoc.user.image = `${getRootUrl(req)}/${doc.user.image}`;
  }

  for (let i = 0; i < doc.products.length; i++) {
    const { product } = doc.products[i];
    newDoc.products[i].product.images = product.images.map(
      (img) => `${getRootUrl(req)}/${img}`
    );
  }

  return newDoc;
};

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
