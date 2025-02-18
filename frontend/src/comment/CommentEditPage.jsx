import { useEffect, useState } from "react";

import classes from "./CommentEditPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getCommentById, editCommentById } from "../store/comment-actions";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const MAX_SYMBOLS = 100;

const CommentEditPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const selectedComment = useSelector((state) => state.comment.selected);
  const [comment, setComment] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setComment(selectedComment.comment);
  }, [selectedComment.comment]);

  //whenever this executes then state.comment.selected will be changed.
  useEffect(() => {
    dispatch(getCommentById(id));
  }, [id]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(editCommentById(id, comment));
  };

  const backHandler = (event) => {
    event.preventDefault();
    history(-1);
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
      <button onClick={backHandler}>Back</button>
    </form>
  );
};

export default CommentEditPage;
