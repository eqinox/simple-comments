const HttpError = require("../models/http-error");
const Comment = require("mongoose").model("Comment");

module.exports.getAll = async (req, res, next) => {
  try {
    const all = await Comment.find();
    res.status(200).json(all);
  } catch (error) {
    return next(new HttpError("Fetching all Failed, try again later", 500));
  }
};

module.exports.add = async (req, res, next) => {
  const comment = req.body.comment;
  let createdComment = new Comment({ comment });

  try {
    await createdComment.save();
    res.status(200).json({ comment: createdComment });
  } catch (error) {
    return next(new HttpError(error.toString(), 500));
  }
};

module.exports.delete = async (req, res, next) => {
  const id = req.params.id;

  try {
    const comment = await Comment.findByIdAndDelete(id);
    res.status(200).json(comment);
  } catch (error) {
    return next(new HttpError("Deleting comment failed", 500));
  }
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const comment = await Comment.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    return next(new HttpError("Getting comment failed", 500));
  }
};

module.exports.edit = async (req, res, next) => {
  const id = req.params.id;
  const newComment = req.body.comment;
  
  try {
    let comment = await Comment.findById(id);

    comment.comment = newComment;

    const changed = await comment.save();
    res.status(200).json(changed);
  } catch (error) {
    return next(new HttpError("Editing comment failed", 500));
  }
};
