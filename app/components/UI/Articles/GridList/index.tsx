"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Card from "@/app/components/UI/Card";
import InfiniteScroll from "../InfiniteScroll";
import fetchArticles from "@/app/actions/actions";

export default function GridList({
  initialArticles = [],
}: {
  initialArticles: any;
}) {
  const [page, setPage] = useState(1);
  console.log("page :", page);
  const [articles, setArticles] = useState<any[]>(initialArticles);
  const [hasMoreData, setHasMoreData] = useState(true);
  const scrollTrigger = useRef(null);

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

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const { scrollTop, scrollHeight, clientHeight } =
  //         document.documentElement;
  //       if (scrollTop + clientHeight >= scrollHeight - 400 && hasMoreData) {
  //         loadMoreArticles();
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [hasMoreData]);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {articles.map(({ id, titel, afbeelding, labelType }: any) => {
          return (
            <Link key={id} href={`sports/artikel/${id}`}>
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

      <button onClick={loadMoreArticles}>Load More</button>

      {/* <InfiniteScroll initialArticles={articles} /> */}

      {/* <div>
        <div className="text-center text-slate-600 mt-5">
          {hasMoreData ? (
            <div ref={scrollTrigger}>Loading...</div>
          ) : (
            <p className="text-slate-600">No more posts to load</p>
          )}
        </div>
      </div> */}
    </>
  );
}
