"use client";

import { useDispatch, useSelector } from "react-redux";

import { INITIAL_PAGE, PAGE_LIMIT } from "@/app/constants";

import {
  selectArticles,
  selectErrorArticles,
  selectLoadingArticles,
} from "@/store/features/articles/articlesSelector";
import {
  setArticles,
  setArticlesError,
  setLoadingArticles,
} from "@/store/features/articles/articlesSlice";
import { selectPage } from "@/store/features/pagination/paginationSelector";
import { setPage } from "@/store/features/pagination/paginationSlice";
import fetchArticles from "@/app/actions/actions";

import InfiniteScroll from "@/app/components/InfiniteScroll";
import Spinner from "@/app/components/Spinner";

import debounce from "@/app/utils/debounce";

import ArticleList from "@/app/components/ArticleList";
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
