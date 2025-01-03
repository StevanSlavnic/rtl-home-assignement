import { RootState } from "@/redux-store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectArticlesDomain = (state: RootState) => state;

export const selectArticles = () =>
  createSelector(selectArticlesDomain, (state) => {
    return state.articles.data || [];
  });

export const selectCurrentPage = () =>
  createSelector(selectArticlesDomain, (state) => {
    return state.articles.data.currentPage || 1;
  });

export const selectLoadingArticles = () =>
  createSelector(selectArticlesDomain, (state) => state.articles.loading);

export const selectErrorArticles = () =>
  createSelector(selectArticlesDomain, (state) => state.articles.error);
