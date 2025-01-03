/**
 * @jest-environment node
 */
// use the node environment to test the API routes - tell Jest to use the node environment in the route test files
import { GET } from "./route";
import { articles } from "../../../data/articles";
import { PAGE_LIMIT } from "@/constants";

describe("GET /api/articles", () => {
  it("returns paginated articles", async () => {
    const request = new Request(
      "https://example.com/api/articles?page=1&limit=2"
    );
    const response = await GET(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data).toHaveLength(2);
    expect(json.data[0]).toEqual({
      id: articles[0].id,
      titel: articles[0].titel,
      afbeelding: articles[0].afbeelding.path,
      labelType: articles[0].labelType,
    });
    expect(json.data[1]).toEqual({
      id: articles[1].id,
      titel: articles[1].titel,
      afbeelding: articles[1].afbeelding.path,
      labelType: articles[1].labelType,
    });
  });

  it("returns default number of articles when limit is not specified", async () => {
    const request = new Request("https://example.com/api/articles?page=1");
    const response = await GET(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data).toHaveLength(PAGE_LIMIT);
  });
});
