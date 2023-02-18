const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Tiêu đề không được bỏ trống'],
    },
    content: {
      type: String,
      trim: true,
      required: [true, 'Nội dung không được bỏ trống'],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: [true, 'Đánh giá không được bỏ trống'],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Sản phẩm không được bỏ trống'],
      validate: {
        validator: async (value) => {
          const count = await mongoose.models.Product.countDocuments({
            _id: value,
          });
          return count;
        },
        message: 'Không tồn tại sản phẩm với id này',
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'fullName image email',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
