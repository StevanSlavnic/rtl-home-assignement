import { selectNotFound } from "../notFoundSelector";
import { RootState } from "@/store/store";

describe("notFound selectors", () => {
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
    pagination: {
      page: 1,
    },
    notFound: true,
    // other state slices if any
  };

  it("selects notFound state", () => {
    const selectedNotFound = selectNotFound()(mockState);
    expect(selectedNotFound).toBe(mockState.notFound);
  });
});
