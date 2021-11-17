const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  comment: { type: String },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
