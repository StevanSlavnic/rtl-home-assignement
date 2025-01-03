import fetchArticles from "../actions";

global.fetch = jest.fn();

describe("fetchArticles", () => {
  const mockApiUrl = "http://localhost:3000";

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_URL = mockApiUrl;
    jest.clearAllMocks();
  });

  it("should fetch articles successfully", async () => {
    // Mock the fetch response for a successful request
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce([
        { id: 1, title: "Article 1" },
        { id: 2, title: "Article 2" },
      ]),
    });

    const result = await fetchArticles(1, 10);

    expect(global.fetch).toHaveBeenCalledWith(
      `${mockApiUrl}/api/articles?page=1&limit=10`,
      { cache: "no-store" }
    );
    expect(result).toEqual([
      { id: 1, title: "Article 1" },
      { id: 2, title: "Article 2" },
    ]);
  });

  it("should throw an error when the API call fails", async () => {
    // Mock the fetch response for a failed request
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchArticles(1, 10)).rejects.toThrow(
      "Failed to fetch articles"
    );

    expect(global.fetch).toHaveBeenCalledWith(
      `${mockApiUrl}/api/articles?page=1&limit=10`,
      { cache: "no-store" }
    );
  });
});
