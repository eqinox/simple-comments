import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = {
  all: [],
  selected: {},
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    showAll(state, action) {
      let all = action.payload;
      const reversed = all.reverse();
      state.all = reversed;
    },
    addComment(state, action) {
      const comment = action.payload;

      state.all.unshift(comment);
    },
    removeComment(state, action) {
      const id = action.payload;
      console.log(id);
      const comment = state.all.find((item) => {
        return item._id === id;
      });

      if (comment) {
        const index = state.all.indexOf(comment);
        state.all.splice(index, 1);
      }
    },
    selectComment(state, action) {
      const comment = action.payload;
      state.selected = comment;
    },
    edit(state, action) {
      const newComment = action.payload;
      state.selected = newComment;

      const commentOfAll = state.all.find((item) => {
        return item._id === newComment._id;
      });
      if (commentOfAll) {
        const index = state.all.indexOf(commentOfAll);
        state.all[index] = newComment;
      }
    },
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;
