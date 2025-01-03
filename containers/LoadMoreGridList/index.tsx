"use client";

import { useDispatch, useSelector } from "react-redux";

import { INITIAL_PAGE, PAGE_LIMIT } from "@/constants";

import {
  selectArticles,
  selectErrorArticles,
  selectLoadingArticles,
} from "@/redux-store/features/articles/articlesSelector";
import {
  setArticles,
  setArticlesError,
  setLoadingArticles,
} from "@/redux-store/features/articles/articlesSlice";
import { selectPage } from "@/redux-store/features/pagination/paginationSelector";
import { setPage } from "@/redux-store/features/pagination/paginationSlice";
import fetchArticles from "@/app/api/actions/actions";

import InfiniteScroll from "@/components/InfiniteScroll";
import Spinner from "@/components/Spinner";

import debounce from "@/utils/debounce";

import ArticleList from "@/components/ArticleList";
import LoadMoreError from "../LoadMoreError";

export default function LoadMoreGridList({
  totalPages,
}: {
  totalPages: number;
}) {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles());
  const loading = useSelector(selectLoadingArticles());
  const error = useSelector(selectErrorArticles());
  const page = useSelector(selectPage());

  const loadMoreArticles = async () => {
    dispatch(setLoadingArticles(true));
    const newPage = page + INITIAL_PAGE;
    const response = await fetchArticles(newPage, PAGE_LIMIT).catch((error) => {
      dispatch(setArticlesError(error));
      dispatch(setLoadingArticles(false));
    });

    if (!response.data.length) {
      dispatch(setLoadingArticles(false));
    }

    dispatch(setLoadingArticles(false));
    dispatch(setArticles(response));
    dispatch(setPage(newPage));
  };

  const debounceLoadMoreArticles = debounce(loadMoreArticles, 300);

  return (
    <div className="mt-5">
      <ArticleList
        testid="grid-client"
        styles="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5"
        type="base"
        articles={articles.data}
      />

      <LoadMoreError error={!!error} />

      <Spinner loading={loading && !error} />

      <InfiniteScroll
        isDisabled={(loading || totalPages === page) && !error}
        onScroll={debounceLoadMoreArticles}
      />
    </div>
  );
}
