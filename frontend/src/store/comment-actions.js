import { commentActions } from "./comment-slice";

export const addComment = (comment) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1339/comment", {
          method: "POST",
          body: JSON.stringify(comment),
          headers: { "Content-Type": "application/json" },
        });

        return await response.json();
      } catch (error) {
        return error;
      }
    };

    try {
      const commentData = await fetchData();

      if (commentData.error) {
        console.log(commentData.error);
      } else {
        dispatch(commentActions.addComment(commentData.comment));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllComments = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1339/comments");

        return await response.json();
      } catch (error) {
        return error;
      }
    };

    try {
      const allCommentData = await fetchData();

      if (allCommentData.error) {
        console.log(allCommentData.error);
      } else {
        dispatch(commentActions.showAll(allCommentData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComment = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1339/comment/${id}`, {
          method: "DELETE",
        });

        return await response.json();
      } catch (error) {
        return error;
      }
    };

    try {
      const deletedComment = await fetchData();

      if (deletedComment.error) {
        console.log(deletedComment.error);
      } else {
        dispatch(commentActions.removeComment(deletedComment._id));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCommentById = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1339/comment/${id}`);

        return await response.json();
      } catch (error) {
        return error;
      }
    };

    try {
      const comment = await fetchData();

      if (comment.error) {
        console.log(comment.error);
      } else {
        dispatch(commentActions.selectComment(comment));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editCommentById = (id, comment) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1339/comment/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({comment}),
          headers: { "Content-Type": "application/json" },
        });

        return await response.json();
      } catch (error) {
        return error;
      }
    };

    try {
      const edittedResponse = await fetchData();

      if (edittedResponse.error) {
        console.log(edittedResponse.error);
      } else {
        dispatch(commentActions.edit(edittedResponse))
      }
    } catch (error) {
      console.log(error);
    }
  };
};
