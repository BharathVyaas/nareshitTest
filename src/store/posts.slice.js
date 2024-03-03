import { createSlice } from "@reduxjs/toolkit";

// posts.slice.js

const postsSlice = createSlice({
  name: "posts",
  initialState: { loading: false, data: null, error: null },
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;
export default postsSlice.reducer;
