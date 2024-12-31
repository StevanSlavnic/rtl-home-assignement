import fetchArticles from "../../actions/actions";
import { INITIAL_PAGE, PAGE_LIMIT } from "../../constants";

import Teaser from "@/app/components/Articles/Teaser";
import TeaserList from "@/app/components/Articles/TeaserList";
import GridList from "@/app/components/Articles/GridList";
import LoadMoreGridList from "@/app/containers/LoadMoreGridList";

export default async function Sport() {
  const response = await fetchArticles(INITIAL_PAGE, PAGE_LIMIT);

  return (
    <>
      <div data-testid="teaser-section" className="flex flex-col lg:flex-row">
        <Teaser article={{ ...response.data[0] }} />

        <TeaserList articles={response.data.slice(1, 5)} />
      </div>

      <GridList articles={response.data} />
      <LoadMoreGridList totalPages={response.totalPages} />
    </>
  );
}
