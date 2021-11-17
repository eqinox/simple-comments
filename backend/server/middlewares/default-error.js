module.exports = (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({
    error: { message: error.message || "An unknown error occured!" },
  });
};
