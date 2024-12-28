import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/articles/articlesSlice";
import paginationReducer from "./features/pagination/paginationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      articles: articlesReducer,
      pagination: paginationReducer,
    }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
