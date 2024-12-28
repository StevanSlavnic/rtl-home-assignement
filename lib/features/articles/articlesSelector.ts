import { RootState } from "@/lib/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectArticlesDomain = (state: RootState) => state;

export const selectArticles = () =>
  createSelector(selectArticlesDomain, (state) => state.articles.articles);
