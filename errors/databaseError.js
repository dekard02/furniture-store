const AppError = require('./AppError');

exports.handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

exports.handleDuplicateErrorDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate fields value: ${value}.Please use another value!`;
  return new AppError(message, 400);
};

exports.handleValidationErrorDB = (err) => {
  const errors = {};
  Object.values(err.errors).forEach((el) => {
    errors[el.path] = el.message;
  });

  const message = 'Thông tin nhập vào không hợp lệ.';
  const appErr = new AppError(message, 400);
  appErr.errors = errors;
  return appErr;
};
