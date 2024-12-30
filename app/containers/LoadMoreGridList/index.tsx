"use client";

import fetchArticles from "@/app/actions/actions";
import Card from "@/app/components/Card";
import InfiniteScroll from "@/app/components/InfiniteScroll";
import Spinner from "@/app/components/Spinner";
import { PAGE_LIMIT, SPORT_ARTICLE_URI } from "@/app/constants";
import { IArticle } from "@/app/types";
import debounce from "@/app/utils/debounce";
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
    const newPage = page + 1;
    const response = await fetchArticles(newPage, PAGE_LIMIT)
      .catch((error) => {
        dispatch(setArticlesError(error));
      })
      .finally(() => {
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
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
        {articles.data.map(({ id, titel, afbeelding, labelType }: IArticle) => {
          return (
            <Link key={id} href={`${SPORT_ARTICLE_URI}/${id}`}>
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
        <div className="text-red-500">
          <div>Error fetching articles</div>
          <button
            onClick={() => {
              router.refresh();
            }}
          >
            Try again
          </button>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Go to home
          </button>
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
