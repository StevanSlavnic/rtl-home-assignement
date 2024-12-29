import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectNotFoundDomain = (state: RootState) => state;

export const selectNotFound = () =>
  createSelector(selectNotFoundDomain, (state) => state.notFound);
