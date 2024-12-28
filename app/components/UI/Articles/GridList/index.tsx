"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/app/components/UI/Card";
import InfiniteScroll from "../InfiniteScroll";
import fetchArticles from "@/app/actions/actions";
import { IArticle } from "@/app/types";
import { SPORT_ARTICLE_URI } from "@/app/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles } from "@/lib/features/articles/articlesSelector";
import { setArticles } from "@/lib/features/articles/articlesSlice";
import { setPage } from "@/lib/features/pagination/paginationSlice";
import { selectPage } from "@/lib/features/pagination/paginationSelector";

export default function GridList() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles());
  const page = useSelector(selectPage());
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreArticles = async () => {
    if (hasMoreData) {
      const newPage = page + 1;
      const response = await fetchArticles(newPage, 12);

      if (!response.data.length) {
        setHasMoreData(false);
      }

      dispatch(setArticles(response.data));
      dispatch(setPage(newPage));
    }
  };

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

      <InfiniteScroll hasMoreData={hasMoreData} onChange={loadMoreArticles} />
    </>
  );
}
