import { configureStore, Reducer } from "@reduxjs/toolkit";
import articlesReducer from "./reducers/articlesReducer";

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `posts`, handled by `postsReducer`
    articles: articlesReducer as Reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
