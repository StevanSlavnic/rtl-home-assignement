import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import articlesReducer from "./features/articles/articlesSlice";
import notFoundReducer from "./features/notFound/notFoundSlice";

const rootReducer = combineReducers({
  articles: articlesReducer,
  notFound: notFoundReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
