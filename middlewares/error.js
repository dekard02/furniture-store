const {
  sendErrorInDevelopment,
  sendErrorInProduction,
} = require('../errors/sendError');

const {
  handleCastErrorDB,
  handleDuplicateErrorDB,
  handleValidationErrorDB,
} = require('../errors/databaseError');

module.exports = (err, req, res, next) => {
  let error = Object.create(err);
  error.status = err.status || 'error';
  error.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    sendErrorInDevelopment(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateErrorDB(err);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(err);

    sendErrorInProduction(error, req, res);
  }
};
