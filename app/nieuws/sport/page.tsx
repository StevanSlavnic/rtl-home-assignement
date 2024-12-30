import fetchArticles from "../../actions/actions";
import { PAGE_LIMIT } from "../../constants";

import Teaser from "@/app/components/Articles/Teaser";
import TeaserList from "@/app/components/Articles/TeaserList";
import GridList from "@/app/components/GridList";
import LoadMoreGridList from "@/app/containers/LoadMoreGridList";

export default async function Sport() {
  const response = await fetchArticles(1, PAGE_LIMIT);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Teaser article={{ ...response.data[0] }} />

        <TeaserList articles={response.data.slice(1, 5)} />
      </div>

      <GridList articles={response.data} />
      <LoadMoreGridList totalPages={response.totalPages} />
    </>
  );
}
