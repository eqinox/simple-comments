import React, { useEffect } from "react";

// import classes from "./CommentPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import AllComments from "./AllComments";
import { getAllComments } from "../store/comment-actions";

const CommentPage = () => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.comment.all);

  useEffect(() => {
    dispatch(getAllComments());
  }, []);

  // transfer through CommentForm just for adding without backend
  return (
    <div>
      <CommentForm />
      {allComments && <AllComments comments={allComments} />}
    </div>
  );
};

export default CommentPage;
