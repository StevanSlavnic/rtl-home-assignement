import { RootState } from "@/redux-store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectStateDomain = (state: RootState) => state;

export const selectPage = () =>
  createSelector(selectStateDomain, (state) => state.pagination.page);
