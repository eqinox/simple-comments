import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../store/comment-actions";

import classes from "./CommentCard.module.css";

const CommentCard = (props) => {
  const dispatch = useDispatch();
  const comment = props.comment;

  const deleteHandler = (event) => {
    event.preventDefault();
    dispatch(deleteComment(comment._id));
  };

  return (
    <div className={classes.comment}>
      {comment.comment}
      <div className={classes.actions}>
        <button onClick={deleteHandler}>Delete</button>
        <Link to={`/comment/edit/${comment._id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default CommentCard;
