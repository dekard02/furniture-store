const mongoose = require('mongoose');
const slugify = require('slugify');

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

categorySchema.path('name').validate(async (value) => {
  const nameCount = await mongoose.models.Category.countDocuments({
    name: value,
  });
  return !nameCount;
}, 'Tên loại sản phẩm này đã tồn tại');

categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
