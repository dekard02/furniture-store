const AppError = require('../errors/AppError');
const asyncHandler = require('../errors/asyncHandler');
const Order = require('../models/orderModel');
const APIFeatures = require('../utils/APIFeature');
const { omitFields } = require('../utils/objectUtils');

exports.getAllOrders = asyncHandler(async (req, res, next) => {
  const features = new APIFeatures(Order.find(), req.query);
  if (req.user.role === 'CUSTOMER') {
    features.mongooseQuery.find({ user: req.user.get('_id') });
  }

  await features.search().filter().sort().limitFields().paginate();

  if (req.user.role === 'CUSTOMER') {
    features.mongooseQuery.find({ user: req.user.get('_id') });
  }
  const orders = await features.mongooseQuery;

  return res.status(200).json({
    status: 'success',
    page: features.page,
    orders,
  });
});

exports.getOrder = asyncHandler(async (req, res, next) => {
  const orderQuery = Order.findById(req.params.id);
  if (req.user.role === 'CUSTOMER') {
    orderQuery.findOne({ user: req.user.get('_id') }).select('-user');
  }
  const order = await orderQuery;

  if (!order) throw new AppError('Không tìm thấy đơn hàng với id này', 404);

  return res.status(200).json({
    status: 'success',
    order,
  });
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  const orderInfo = omitFields(req.body, 'status');
  if (req.user) orderInfo.user = req.user.get('_id');
  const order = await Order.create(orderInfo);

  return res.status(201).json({
    status: 'success',
    order,
  });
});

exports.updateOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) throw new AppError('Không tìm thấy đơn hàng với id này', 404);

  if (order.status !== 'PENDING')
    throw new AppError(
      'Không thể sửa thông tin do đơn hàng đã được duyệt!!',
      400
    );

  const orderInfo = { ...req.body };
  if (req.user.role === 'CUSTOMER') {
    if (['SUCCESS', 'SHIPPING'].includes(req.body.status)) {
      delete orderInfo.status;
    }
  }

  const newOrder = await Order.findByIdAndUpdate(req.params.id, orderInfo);
  return res.status(200).json({
    status: 'success',
    order: newOrder,
  });
});

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) throw new AppError('Không tồn tại đơn hàng với id này', 404);

  return res.status(204).json({
    status: 'success',
    order,
  });
});
