const asyncHandler = require('../errors/asyncHandler');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

exports.getCount = asyncHandler(async (req, res, next) => {
  const [user, product, successOrder, pendingOrder, canceledOrder] =
    await Promise.all([
      User.find({ role: 'CUSTOMER' }).countDocuments(),
      Product.find({
        isDeleted: false,
      }).countDocuments(),
      Order.find({ status: 'SUCCESS' }).countDocuments(),
      Order.find({ status: 'PENDING' }).countDocuments(),
      Order.find({ status: 'CANCELED' }).countDocuments(),
    ]);

  res.status(200).json({
    status: 'success',
    count: {
      user,
      product,
      pendingOrder,
      successOrder,
      canceledOrder,
    },
  });
});

exports.getRevenue = asyncHandler(async (req, res, next) => {
  const currentDate = new Date();
  const year = req.params.year || currentDate.getFullYear();
  const month = req.params.year || currentDate.getMonth() + 1;

  const result = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(year, month - 1, 1),
          $lt: new Date(year, month, 1),
        },
      },
    },
    {
      $addFields: {
        total: {
          $reduce: {
            input: '$products',
            initialValue: 0,
            in: {
              $add: [
                '$$value',
                { $multiply: ['$$this.price', '$$this.amount'] },
              ],
            },
          },
        },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: '%d-%m-%Y', date: '$createdAt' } },
        revenue: {
          $sum: '$total',
        },
      },
    },
  ]);

  return res.status(200).json({
    status: 'success',
    dailyRevenue: result,
  });
});
