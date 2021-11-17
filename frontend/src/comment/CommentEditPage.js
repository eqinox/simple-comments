import React, { useEffect, useRef } from "react";

import classes from "./CommentEditPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getCommentById, editCommentById } from "../store/comment-actions";
import { useHistory } from "react-router";

const CommentEditPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const selectedComment = useSelector((state) => state.comment.selected);
  let comment = useRef();

  // maybe there's better way
  if (comment.current && selectedComment.comment) {
    comment.current.value = selectedComment.comment;
  }

  useEffect(() => {
    dispatch(getCommentById(props.match.params.id));
  }, [props.match.params.id]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(editCommentById(props.match.params.id, comment.current.value));
  };

  const backHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };


  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.control}`}>
        <textarea ref={comment} />
        <div
          className={`${classes.errorMsg} ${classes.hide}`}
        >
          error
        </div>
      </div>
      <div className={classes.control}>
        <input type="submit"/>
      </div>
      <button onClick={backHandler}>Back</button>
    </form>
  );
};

export default CommentEditPage;
