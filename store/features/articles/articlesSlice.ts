import { IArticle } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticlesState {
  data: IArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  data: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.data = [...state.data, ...action.payload];
    },
    setLoadingArticles: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setArticlesError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setArticles, setLoadingArticles, setArticlesError } =
  articlesSlice.actions;

export default articlesSlice.reducer;
