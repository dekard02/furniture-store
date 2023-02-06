const Category = require('../models/categoryModel');

exports.getAllCategories = async (req, res, next) => {
  const categories = await Category.find();
  return res.status(200).json({
    status: 'success',
    categories,
  });
};

exports.getCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  return res.status(200).json({
    status: 'success',
    category,
  });
};

exports.createCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(201).json({
    status: 'success',
    category,
  });
};

exports.updateCategory = async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body);
  return res.status(204).json({
    status: 'success',
    category,
  });
};

exports.deleteCategory = async (req, res, next) => {
  await Category.findByIdAndDelete(req.params.id);
  return res.status(204).json({
    status: 'success',
    category: null,
  });
};
