import React from "react";
import fetchArticles from "../actions/actions";
import { PAGE_LIMIT } from "../constants";

export default async function Sport() {
  const { data: articles } = await fetchArticles(1, PAGE_LIMIT);
  console.log("articles :", articles);

  return <div>Sport</div>;
}
