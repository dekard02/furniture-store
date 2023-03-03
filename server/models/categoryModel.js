const mongoose = require('mongoose');
const slugify = require('slugify');
const AppError = require('../errors/AppError');

// TODO: validate
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tên loại sản phẩm không được bỏ trống'],
      minLength: [3, 'Tên loại sản phẩm tối thiểu 3 ký tự'],
      maxLength: [20, 'Tên loại sản phẩm tối đa 30 ký tự'],
      trim: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Không được bỏ trống mô tả'],
      minLength: [30, 'Mô tả tối thiểu 50 ký tự'],
      trim: true,
    },
    enable: {
      type: Boolean,
      default: true,
    },
  },
  {
    id: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

categorySchema.index({ slug: 1 });
categorySchema.index({ '$**': 'text' });

categorySchema.path('name').validate(async function (value) {
  if (this.isNew) {
    const nameCount = await mongoose.models.Category.countDocuments({
      name: value,
    });
    return !nameCount;
  }

  return true;
}, 'Tên loại sản phẩm này đã tồn tại');

categorySchema.pre(/(u|U)pdate/, async function (next) {
  const { _id } = this.getQuery();
  const updatedName = this.get('name');
  const nameCount = await mongoose.models.Category.countDocuments({
    name: updatedName,
    _id: {
      $ne: _id,
    },
  });

  if (!nameCount) next();
  else throw new AppError('Tên loại sản phẩm này đã tồn tại', 400);
});

categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
