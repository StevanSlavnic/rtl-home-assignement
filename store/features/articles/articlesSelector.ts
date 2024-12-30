import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectArticlesDomain = (state: RootState) => state;

export const selectArticles = () =>
  createSelector(selectArticlesDomain, (state) => {
    return state.articles.data || [];
  });

export const selectLoadingArticles = () =>
  createSelector(selectArticlesDomain, (state) => state.articles.loading);

export const selectErrorArticles = () =>
  createSelector(selectArticlesDomain, (state) => state.articles.error);
