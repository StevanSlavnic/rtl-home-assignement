import reducer, {
  setArticles,
  setLoadingArticles,
  setArticlesError,
  ArticlesState,
  IArticlesData,
} from "../articlesSlice";

describe("articlesSlice", () => {
  const initialState: ArticlesState = {
    data: {
      data: [],
      currentPage: 1,
      total: 0,
      totalPages: 0,
    },
    isInitalized: false,
    loading: false,
    error: null,
  };

  it("should handle setArticles", () => {
    const articlesData: IArticlesData = {
      data: [
        {
          id: 1,
          titel: "Article 1",
          labelType: "Label 1",
          afbeelding: "image1.jpg",
        },
        {
          id: 2,
          titel: "Article 2",
          labelType: "Label 2",
          afbeelding: "image2.jpg",
        },
      ],
      currentPage: 1,
      total: 2,
      totalPages: 1,
    };
    const nextState = reducer(initialState, setArticles(articlesData));
    expect(nextState.data).toEqual({
      ...articlesData,
      data: [...initialState.data.data, ...articlesData.data],
    });
  });

  it("should handle setLoadingArticles", () => {
    const nextState = reducer(initialState, setLoadingArticles(true));
    expect(nextState.loading).toBe(true);
  });

  it("should handle setArticlesError", () => {
    const error = new Error("Failed to fetch articles");
    const nextState = reducer(initialState, setArticlesError(error));
    expect(nextState.error).toBe(error);
  });
});
