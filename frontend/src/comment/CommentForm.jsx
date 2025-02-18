import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/comment-actions";

import classes from "./CommentForm.module.css";

const MAX_SYMBOLS = 100;

const CommentForm = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const newComment = { comment };
    dispatch(addComment(newComment));
  };

  const commentHandler = (event) => {
    event.preventDefault();
    const text = event.target.value;

    if (text.trim().length === 0) {
      setError("field should not be empty");
      setComment(text);
    } else if (text.length >= MAX_SYMBOLS) {
      setError(`The comment can contain maximum of ${MAX_SYMBOLS} symbols`);
    } else {
      setComment(text);
      setError(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.control} ${error ? classes.invalid : ""}`}>
        <textarea onChange={commentHandler} value={comment} />
        <div
          className={`${classes.errorMsg} ${
            error ? classes.show : classes.hide
          }`}
        >
          {error}
        </div>
      </div>
      <div className={classes.control}>
        <input type="submit" disabled={error ? "disabled" : false} />
      </div>
    </form>
  );
};

export default CommentForm;
