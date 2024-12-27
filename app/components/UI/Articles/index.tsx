import React from "react";
import Teaser from "./Teaser";
import TeaserList from "./TeaserList";
import GridList from "./GridList";
import InfiniteScroll from "./InfiniteScroll";
import { IArticle } from "@/app/types";

export default function Articles({ articles }: { articles: IArticle[] }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-4">
        <div className="flex flex-col lg:flex-row">
          <Teaser article={{ ...articles[0] }} />

          <TeaserList articles={articles.slice(1, 5)} />
        </div>
      </div>
      <GridList initialArticles={articles} />
    </>
  );
}
