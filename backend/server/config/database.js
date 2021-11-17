const mongoose = require("mongoose");

// All Models must be loaded
require("../models/comment");

module.exports = (settings) => {
  mongoose.promise = global.Promise;
  mongoose
    .connect(settings.connectionString, {
      useNewUrlParser: true,
    })
    .then()
    .catch((err) => {
      console.log(err);
    });

  let database = mongoose.connection;

  database.on("open", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Database connected");
  });


  database.on("error", (err) => {
    if (err) {
      logger.errorLog.error("Database Error:", { message: err });
    }
  });
};