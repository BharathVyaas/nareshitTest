import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
} from "./posts.slice";

// posts.saga.js

function* fetchPosts() {
  try {
    /***
     *
     * Logging...
     *
     */
    console.log("fetching");
    yield put(fetchPostsStart());
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );

    yield put(fetchPostsSuccess(response));
  } catch (err) {
    console.error("Error fetching posts:", err);
    yield put(fetchPostsFailure(err.message));
  }
}

export function* postsSaga() {
  yield takeLatest("posts/fetch", fetchPosts);
}
