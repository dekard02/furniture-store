exports.sendErrorInDevelopment = (err, req, res) =>
  res.status(err.statusCode).json({
    status: err.status,
    err,
    message: err.message,
    stack: err.stack,
  });

exports.sendErrorInProduction = (err, req, res) => {
  // Operational error
  if (err.isBusinessErr) {
    const { errors } = err;
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      errors,
    });
  }

  // Proraming or other unknown error
  console.error('ERROR: ', err);
  return res.status(500).json({
    status: 'fail',
    message: 'Something went wrong!!',
  });
};
