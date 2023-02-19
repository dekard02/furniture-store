const rootUrl = process.env.ROOT_URL || '';
const mongoose = require('mongoose');
const slugify = require('slugify');
const AppError = require('../errors/AppError');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Tên sản phẩm không được bỏ trống'],
      minLength: [10, 'Tên loại sản phẩm phải tối thiểu 10 ký tự'],
      maxLength: [50, 'Tên loại sản phẩm phải tối đa 50 ký tự'],
      unique: true,
      uniqueCaseInsensitive: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Mô tả sản phẩm không được bỏ trống'],
      minLength: [70, 'Mô tả sản phẩm phải tối thiểu 70 ký tự'],
    },
    images: [String],
    price: {
      type: Number,
      required: [true, 'Không được bỏ trống giá bán'],
      min: [0, 'Giá bán không được là số âm'],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 4.0,
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      defautl: 0,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Category',
      required: [true, 'Loại sản phẩm không được bỏ trống'],
      validate: {
        validator: async (value) => {
          const result = await Promise.all(
            value.map(async (el) => {
              const count = await mongoose.models.Category.countDocuments({
                _id: el,
              });
              return count;
            })
          );

          return result.some((el) => el !== 0);
        },
        message: 'Không tồn tại loại sản phẩm với id này',
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
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

productSchema.index({ slug: 1 });
productSchema.index({ price: 1 });
productSchema.index({ '$**': 'text' });

productSchema.path('name').validate(async function (value) {
  if (this.isNew) {
    const nameCount = await mongoose.models.Product.countDocuments({
      name: value,
    });
    return !nameCount;
  }

  return true;
}, 'Tên sản phẩm này đã tồn tại');

productSchema.pre(/^find/, function (next) {
  this.projection({
    name: 1,
    slug: 1,
    description: 1,
    price: 1,
    quantity: 1,
    ratingsAverage: 1,
    ratingsQuantity: 1,
    isDeleted: 1,
    images: {
      $map: {
        input: '$images',
        as: 'image',
        in: { $concat: [rootUrl, '/', '$$image'] },
      },
    },
  });
  next();
});

productSchema.pre(/(u|U)pdate/, async function (next) {
  const { _id } = this.getQuery();
  const updatedName = this.get('name');
  const nameCount = await mongoose.models.Product.countDocuments({
    name: updatedName,
    _id: {
      $ne: _id,
    },
  });

  if (!nameCount) next();
  else throw new AppError('Tên sản phẩm này đã tồn tại', 400);
});

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'categories',
    select: 'name slug description',
  });

  next();
});

productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

productSchema.methods.didUserBuy = async function (productId, userId) {
  const purchasedProduct = await mongoose.models.Order.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $unwind: {
        path: '$products',
      },
    },
    { $group: { _id: null, product: { $addToSet: '$products.product' } } },
    { $unwind: '$product' },
    {
      $match: {
        product: new mongoose.Types.ObjectId(productId),
      },
    },
  ]);

  return purchasedProduct.length !== 0;
};

productSchema.methods.didUserReview = async function (productId, userId) {
  const review = mongoose.models.Review.findOne({
    user: userId,
    product: productId,
  });

  return !review;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
