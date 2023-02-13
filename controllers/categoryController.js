const Category = require('../models/categoryModel');
const asyncHandler = require('../errors/asyncHandler');
const AppError = require('../errors/AppError');
const APIFeatures = require('../utils/APIFeature');

exports.getAllCategories = asyncHandler(async (req, res, next) => {
  const features = await new APIFeatures(Category.find(), req.query)
    .search()
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const categories = await features.mongooseQuery;

  return res.status(200).json({
    status: 'success',
    page: features.page,
    categories,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) throw new AppError('Không tồn tại dữ liệu với id này', 404);

  return res.status(200).json({
    status: 'success',
    category,
  });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(201).json({
    status: 'success',
    category,
  });
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!category) throw new AppError('Không tồn tại dữ liệu với id này', 404);

  return res.status(200).json({
    status: 'success',
    category,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) throw new AppError('Không tồn tại dữ liệu với id này', 404);

  return res.status(204).json({
    status: 'success',
    category: null,
  });
});
