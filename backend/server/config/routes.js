const handlers = require("../handlers");

const HttpError = require("../models/http-error");

module.exports = (app) => {
  app.get("/comments", handlers.comment.getAll);
  app.post("/comment", handlers.comment.add);
  app.delete("/comment/:id", handlers.comment.delete);
  app.patch('/comment/:id', handlers.comment.edit)
  app.get('/comment/:id', handlers.comment.getById)

  // nothing match and throw error
  app.use((req, res, next) => {
    throw new HttpError("Could not find this route.", 404);
  });
};
