import React from "react";

import classes from "./AllComments.module.css";
import CommentCard from "./CommentCard";

const AllComments = (props) => {
  const comments = props.comments;

  return (
    <div className={classes.comment}>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment._id} />
      ))}
    </div>
  );
};

export default React.memo(AllComments);
