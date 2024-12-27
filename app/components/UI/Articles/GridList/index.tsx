"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/app/components/UI/Card";
import InfiniteScroll from "../InfiniteScroll";
import fetchArticles from "@/app/actions/actions";
import { IArticle } from "@/app/types";
import { SPORT_ARTICLE_URI } from "@/app/constants";

export default function GridList({
  initialArticles = [],
}: {
  initialArticles: IArticle[];
}) {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<IArticle[]>(initialArticles);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreArticles = async () => {
    if (hasMoreData) {
      const newPage = page + 1;
      const response = await fetchArticles(newPage, 12);

      if (!response.data.length) {
        setHasMoreData(false);
      }

      setArticles((prevArticles) => [...prevArticles, ...response.data]);
      setPage((prevPage) => prevPage + 1);
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
