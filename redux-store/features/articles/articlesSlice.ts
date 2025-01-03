import { IArticle } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArticlesData {
  data: IArticle[];
  currentPage: number;
  total: number;
  totalPages: number;
}

export interface ArticlesState {
  data: IArticlesData;
  loading: boolean;
  error: Error | null;
}

const initialState: ArticlesState = {
  data: {
    data: [],
    currentPage: 1,
    total: 0,
    totalPages: 0,
  },
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticlesData>) => {
      state.data = {
        ...action.payload,
        data: [...state.data.data, ...action.payload.data],
      };
    },
    setLoadingArticles: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setArticlesError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const { setArticles, setLoadingArticles, setArticlesError } =
  articlesSlice.actions;

export default articlesSlice.reducer;
