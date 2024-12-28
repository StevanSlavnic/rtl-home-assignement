"use client";

import React, { useEffect } from "react";
import Teaser from "./Teaser";
import TeaserList from "./TeaserList";
import GridList from "./GridList";
import { IArticle } from "@/app/types";
import { useDispatch } from "react-redux";
import { setArticles } from "@/lib/features/articles/articlesSlice";

export default function Articles({ articles }: { articles: IArticle[] }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(setArticles(articles));
    }
  }, [articles, dispatch]);

  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-4">
        <div className="flex flex-col lg:flex-row">
          <Teaser article={{ ...articles[0] }} />

          <TeaserList />
        </div>
      </div>
      <GridList />
    </>
  );
}
