import fetchArticles from "../actions/actions";
import { PAGE_LIMIT } from "../constants";
import Articles from "../components/UI/Articles";

export default async function Sport() {
  const { data: articles } = await fetchArticles(1, PAGE_LIMIT);
  console.log("articles :", articles);

  return <Articles articles={articles} />;
}
