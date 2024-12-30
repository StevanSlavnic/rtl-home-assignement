import { generateArticleUrl } from "../generateArticleUrl";
import { SPORT_ARTICLE_URI } from "../../constants";

describe("generateArticleUrl", () => {
  it("generates the correct URL for a given id and title", () => {
    const id = 1;
    const titel = "Test Title";
    const expectedUrl = `${SPORT_ARTICLE_URI}/${id}/test-title`;

    const result = generateArticleUrl(id, titel);
    expect(result).toBe(expectedUrl);
  });

  it("replaces spaces in the title with hyphens", () => {
    const id = 2;
    const titel = "Another Test Title";
    const expectedUrl = `${SPORT_ARTICLE_URI}/${id}/another-test-title`;

    const result = generateArticleUrl(id, titel);
    expect(result).toBe(expectedUrl);
  });

  it("handles titles with multiple spaces correctly", () => {
    const id = 3;
    const titel = "Title With Multiple Spaces";
    const expectedUrl = `${SPORT_ARTICLE_URI}/${id}/title-with-multiple-spaces`;

    const result = generateArticleUrl(id, titel);
    expect(result).toBe(expectedUrl);
  });
});
