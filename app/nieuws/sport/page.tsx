import fetchArticles from "../../actions/actions";
import { INITIAL_PAGE, PAGE_LIMIT } from "../../constants";

import LoadMoreGridList from "@/app/containers/LoadMoreGridList";
import ArticleList from "@/app/components/ArticleList";

export default async function Sport() {
  const response = await fetchArticles(INITIAL_PAGE, PAGE_LIMIT);

  return (
    <>
      <section
        data-testid="teaser-section"
        className="flex flex-col lg:flex-row"
      >
        <ArticleList
          testid="teaser"
          type="teaser"
          articles={[response.data[0]]}
          styles="w-full shrink-0 mb-5 sm:mb-5 lg:w-[643px]"
        />

        <ArticleList
          testid="teaser-list"
          type="teaser-list"
          styles="flex gap-y-5 flex-col sm:ml-0 sm:mb-5 sm:gap-5 sm:gap-y-5 md:grid md:grid md:gap-y-5 md:grid-cols-[repeat(2,_1fr)] md:mb-5 lg:flex lg:flex-col lg:flex-wrap lg:ml-5 lg:grow lg:gap-y-5"
          articles={response.data.slice(1, 5)}
        />
      </section>

      <section>
        <ArticleList
          testid="grid-ssr"
          type="base"
          articles={response.data}
          styles="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5"
        />
        <LoadMoreGridList totalPages={response.totalPages} />
      </section>
    </>
  );
}
