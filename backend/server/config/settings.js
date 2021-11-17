const path = require("path");
const EXPIRE_COOKIE = "20m";

module.exports = {
  development: {
    port: 1339,
    connectionString: "mongodb://localhost:27017/simple-comments",
    rootPath: path.normalize(path.join(__dirname, "/../../")),
    secret: "neshto taino",
    expireToken: EXPIRE_COOKIE,
  },
  production: {
    // TODO:
  },
};
