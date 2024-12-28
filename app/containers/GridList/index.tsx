"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Card from "@/app/components/UI/Card";
import InfiniteScroll from "@/app/components/UI/InfiniteScroll";
import Spinner from "../../components/UI/Spinner";
import fetchArticles from "@/app/actions/actions";

import { PAGE_LIMIT, SPORT_ARTICLE_URI } from "@/app/constants";
import { useDispatch, useSelector } from "react-redux";
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
import { setPage } from "@/store/features/pagination/paginationSlice";
import { selectPage } from "@/store/features/pagination/paginationSelector";

import debounce from "@/app/utils/debounce";

import { IArticle } from "@/app/types";

export default function GridList({
  initialArticles,
}: {
  initialArticles: IArticle[];
}) {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles());
  const loading = useSelector(selectLoadingArticles());
  const error = useSelector(selectErrorArticles());
  const page = useSelector(selectPage());
  const [hasMoreData, setHasMoreData] = useState(true);

  if (error) {
    throw new Error("Error fetching articles");
  }

  useEffect(() => {
    if (!articles.length) {
      dispatch(setArticles(initialArticles));
    }
  }, [initialArticles]);

  const loadMoreArticles = async () => {
    if (hasMoreData) {
      dispatch(setLoadingArticles(true));
      const newPage = page + 1;

      const response = await fetchArticles(newPage, PAGE_LIMIT)
        .catch((err) => {
          dispatch(setArticlesError(err));
          dispatch(setLoadingArticles(false));
        })
        .finally(() => {
          dispatch(setLoadingArticles(false));
        });

      if (!response.data.length) {
        setHasMoreData(false);
        dispatch(setLoadingArticles(false));
      }

      dispatch(setArticles(response.data));
      dispatch(setPage(newPage));
    }
  };

  const debounceLoadMoreArticles = debounce(loadMoreArticles, 300);

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
        {articles.map(({ id, titel, afbeelding, labelType }: IArticle) => {
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

      <Spinner loading={loading} />

      <InfiniteScroll
        isEnabled={initialArticles.length > 0}
        hasMoreData={hasMoreData}
        onScroll={debounceLoadMoreArticles}
      />
    </>
  );
}
