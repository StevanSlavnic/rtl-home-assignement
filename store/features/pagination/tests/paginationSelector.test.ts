import { selectPage } from "../paginationSelector";
import { RootState } from "@/store/store";

describe("pagination selectors", () => {
  const mockState: RootState = {
    articles: {
      data: {
        data: [],
        currentPage: 1,
        total: 1,
        totalPages: 1,
      },
      loading: false,
      error: null,
    },
    notFound: false,
    pagination: {
      page: 1,
    },
    // other state slices if any
  };

  it("selects the current page", () => {
    const selectedPage = selectPage()(mockState);
    expect(selectedPage).toBe(mockState.pagination.page);
  });
});
