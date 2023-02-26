const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../errors/asyncHandler');
const User = require('../models/userModel');
const AppError = require('../errors/AppError');

exports.authenticate = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (token) {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new AppError('Tài khoản đang đăng nhập không tồn tại nữa', 401);
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
      throw new AppError(
        'Tài khoản đang đăng nhập đã đổi mật khẩu gần đây. Đăng nhập lại để tiếp tục',
        401
      );
    }

    res.locals.user = currentUser;
    req.user = currentUser;
  }

  return next();
});

exports.protect = asyncHandler(async (req, res, next) => {
  if (!req.user) throw new AppError('Hãy đăng nhập để tiếp tục', 401);
  return next();
});

exports.authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError('Bạn không có quyền thực hiện hành động này', 403);
    }
    return next();
  };
