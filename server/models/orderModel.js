const mongoose = require('mongoose');
const getOrderStatus = require('../utils/getOrderStatus');

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
                validator: async function (value) {
                  const count = await mongoose.models.Product.countDocuments({
                    _id: value,
                  });

                  return count;
                },
                message: 'Không tồn tại sản phẩm với id này',
              },
            ],
          },
          price: {
            type: Number,
          },
          amount: {
            type: Number,
            required: [true, 'Số lượng sản phẩm không được bỏ trống'],
            min: [1, 'Số lượng sản phẩm phải lớn hơn 0'],
            validate: {
              validator: async function (v) {
                const product = await mongoose.models.Product.findById(
                  this.product
                );
                return v <= product.inStock;
              },
              message: 'Sản phẩm đã hết hàng',
            },
          },
        },
      ],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: 'Không được bỏ trống danh sách sản phẩm',
      },
    },
  },
  {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);

orderSchema.index({ fullName: 1, phoneNumber: 1 });
orderSchema.index({ '$**': 'text' });

orderSchema.path('status').get((value) => getOrderStatus(value));

orderSchema.pre('save', async function (next) {
  this.products = await Promise.all(
    this.products.map(async (productObj) => {
      // decrease product inStock
      const productDoc = await mongoose.models.Product.findByIdAndUpdate(
        productObj.product,
        { $inc: { inStock: -productObj.amount } }
      );
      // add current price
      return { ...productObj, price: productDoc.price };
    })
  );

  next();
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'products.product',
    select: 'name slug -categories images',
  }).populate({
    path: 'user',
    select: 'fullName email image',
  });

  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
