const Category = require('../models/categoryModel');
const asyncHandler = require('../errors/asyncHandler');
const AppError = require('../errors/AppError');

exports.getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  return res.status(200).json({
    status: 'success',
    categories,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError('Không tồn tại dữ liệu với id này', 404));
  }

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
  const category = await Category.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).json({
    status: 'success',
    category,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  await Category.findByIdAndDelete(req.params.id);
  return res.status(204).json({
    status: 'success',
    category: null,
  });
});
