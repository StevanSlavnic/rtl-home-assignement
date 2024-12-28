import { IArticle } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticlesState {
  articles: IArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = [...state.articles, ...action.payload];
    },
  },
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
