import {
  selectArticles,
  selectLoadingArticles,
  selectErrorArticles,
} from "../articlesSelector";
import { RootState } from "@/store/store";

describe("articles selectors", () => {
  const mockState: RootState = {
    articles: {
      data: {
        data: [
          {
            id: 1,
            titel: "mock title",
            afbeelding: "mock image",
            labelType: "mock label",
          },
          {
            id: 2,
            titel: "mock title",
            afbeelding: "mock image",
            labelType: "mock label",
          },
        ],
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
    notFound: false,
  };

  it("selects articles data", () => {
    const selectedArticles = selectArticles()(mockState);
    expect(selectedArticles).toEqual(mockState.articles.data);
  });

  it("selects loading state", () => {
    const selectedLoading = selectLoadingArticles()(mockState);
    expect(selectedLoading).toBe(mockState.articles.loading);
  });

  it("selects error state", () => {
    const selectedError = selectErrorArticles()(mockState);
    expect(selectedError).toBe(mockState.articles.error);
  });
});
