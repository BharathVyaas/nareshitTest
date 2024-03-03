import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import postsReducer from "./posts.slice";
import { postsSaga } from "./posts.saga";

//root.store.js

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ posts: postsReducer })
);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([postsSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
