const asyncHandler = require('../errors/asyncHandler');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

exports.getCount = asyncHandler(async (req, res, next) => {
  const [user, product, successOrder, pendingOrder, shippingOrder] =
    await Promise.all([
      User.find({ role: 'CUSTOMER' }).countDocuments(),
      Product.find({
        isDeleted: false,
      }).countDocuments(),
      Order.find({ status: 'SUCCESS' }).countDocuments(),
      Order.find({ status: 'PENDING' }).countDocuments(),
      Order.find({ status: 'SHIPPING' }).countDocuments(),
    ]);

  res.status(200).json({
    status: 'success',
    count: {
      user,
      product,
      pendingOrder,
      successOrder,
      shippingOrder,
    },
  });
});

exports.getRevenue = asyncHandler(async (req, res, next) => {
  const currentDate = new Date();
  const year = +req.query.year || currentDate.getFullYear();
  const lastDayofMonth = getLastDayOfMonth(year, 12);
  const data = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(year, 0, 1),
          $lte: new Date(year, 11, lastDayofMonth),
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
    {
      $addFields: {
        day: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  return res.status(200).json({
    status: 'success',
    data,
  });
});

exports.getEachMonth = async (req, res, next) => {
  const currentDate = new Date();
  const year = +req.query.year || currentDate.getFullYear();
  const lastDayofMonth = getLastDayOfMonth(year, 12);
  const data = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(year, 0, 1),
          $lte: new Date(year, 11, lastDayofMonth),
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
        _id: { $month: '$createdAt' },
        revenue: {
          $sum: '$total',
        },
      },
    },
    {
      $addFields: {
        month: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  return res.status(200).json({
    status: 'success',
    data,
  });
};
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
