import fetchArticles from "../../actions/actions";
import { PAGE_LIMIT } from "../../constants";
import Articles from "../../components/Articles";

export default async function Sport() {
  const { data } = await fetchArticles(1, PAGE_LIMIT);

  return <Articles data-testid="articles-component" articles={data} />;
}
