const asyncHandler = require('../errors/asyncHandler');
const APIFeatures = require('../utils/APIFeature');
const Review = require('../models/reviewModel');
const AppError = require('../errors/AppError');
const { omitFields } = require('../utils/objectUtils');
const Product = require('../models/productModel');

exports.getAllReviews = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const features = await new APIFeatures(
    Review.find({ product: productId }),
    req
  )
    // .filter()
    .sort()
    .limitFields()
    .paginate();

  const reviews = await features.mongooseQuery;

  return res.status(200).json({
    status: 'success',
    page: features.page,
    reviews,
  });
});

exports.getReview = asyncHandler(async (req, res, next) => {
  const { productId, id } = req.params;
  const review = await Review.find({ product: productId }).findOne({ _id: id });
  if (!review) throw new AppError('Không tìm thấy review với id này', 404);

  return res.status(200).json({
    status: 'success',
    review,
  });
});

exports.createReview = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const userId = req.user.get('_id');
  const product = await Product.findById(productId);

  if (!(await product.didUserBuy(productId, userId))) {
    throw new AppError('Bạn chưa mua sản phẩm, không thể review', 400);
  }
  if (await product.didUserReview(productId, userId)) {
    throw new AppError('Bạn đã review, không thể review nữa', 400);
  }

  const review = await Review.create({
    ...req.body,
    product: productId,
    user: userId,
  });
  return res.status(200).json({
    status: 'success',
    review,
  });
});

exports.updateReview = asyncHandler(async (req, res, next) => {
  const { productId, id } = req.params;
  const userId = req.params.get('_id');

  const review = await Review.findOne({ product: productId }).findById(id);
  if (!review) throw new AppError('Không tìm thấy review với id này', 404);
  if (review.user !== userId)
    throw new AppError('Không thể sửa review của người khác', 403);

  const newReview = await Review.findByIdAndUpdate(
    id,
    omitFields(req.body, 'user', 'product'),
    {
      runValidators: true,
      new: true,
    }
  );

  return res.status(200).json({
    status: 'success',
    review: newReview,
  });
});

exports.deleteReview = asyncHandler(async (req, res, next) => {
  const { productId, id } = req.params;
  const userId = req.params.get('_id');

  const review = await Review.findOne({ product: productId }).findById(id);
  if (!review) throw new AppError('Không tìm thấy review với id này', 404);
  if (review.user !== userId)
    throw new AppError('Không thể sửa review của người khác', 403);

  await Review.findByIdAndDelete(id);

  return res.status(204).json({
    status: 'success',
    review: null,
  });
});
