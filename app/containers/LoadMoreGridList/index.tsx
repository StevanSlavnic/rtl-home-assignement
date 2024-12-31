"use client";

import fetchArticles from "@/app/actions/actions";
import Card from "@/app/components/Card";
import InfiniteScroll from "@/app/components/InfiniteScroll";
import Spinner from "@/app/components/Spinner";
import { INITIAL_PAGE, PAGE_LIMIT } from "@/app/constants";
import { IArticle } from "@/app/types";
import debounce from "@/app/utils/debounce";
import { generateArticleUrl } from "@/app/utils/generateArticleUrl";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoadMoreGridList({
  totalPages,
}: {
  totalPages: number;
}) {
  const router = useRouter();
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
    <div>
      <div
        data-testid="grid-client"
        className="grid md:grid-cols-3 lg:grid-cols-4  grid-cols-2 gap-5 mt-4"
      >
        {articles.data.map(({ id, titel, afbeelding, labelType }: IArticle) => {
          return (
            <Link key={id} href={generateArticleUrl(id, titel)}>
              <Card
                id={id}
                titel={titel}
                image={afbeelding}
                labelType={labelType}
                cardType="base"
              />
            </Link>
          );
        })}
      </div>

      {error && (
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="p-4">Error fetching articles</div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-4 gap-4">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => {
                router.refresh();
              }}
            >
              Try again
            </button>
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => {
                router.push("/");
              }}
            >
              Go to home
            </button>
          </div>
        </div>
      )}

      <Spinner loading={loading && !error} />

      <InfiniteScroll
        isDisabled={(loading || totalPages === page) && !error}
        onScroll={debounceLoadMoreArticles}
      />
    </div>
  );
}
