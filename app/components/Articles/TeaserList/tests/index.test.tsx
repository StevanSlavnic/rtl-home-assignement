import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeaserList from "../index";
import { IArticle } from "@/app/types";
import { SPORT_ARTICLE_URI } from "@/app/constants";

const mockArticles: IArticle[] = [
  {
    id: 1,
    titel: "Test Title 1",
    labelType: "Test Label 1",
    afbeelding: "/image-1.jpg",
  },
  {
    id: 2,
    titel: "Test Title 2",
    labelType: "Test Label 2",
    afbeelding: "/image-2.jpg",
  },
  {
    id: 3,
    titel: "Test Title 3",
    labelType: "Test Label 3",
    afbeelding: "/image-3.jpg",
  },
];

describe("TeaserList", () => {
  it("renders the TeaserList component", () => {
    render(<TeaserList articles={mockArticles} />);

    const teaserListElement = screen.getByTestId("teaser-list");
    expect(teaserListElement).toBeInTheDocument();
  });

  it("renders the correct number of articles", async () => {
    render(<TeaserList articles={mockArticles} />);

    const articleElements = screen.getAllByTestId("teaser-list");

    waitFor(() => {
      expect(articleElements.length).toBe(mockArticles.length);
    });
  });

  it("contains links with the correct hrefs", () => {
    render(<TeaserList articles={mockArticles} />);

    mockArticles.map((article) => {
      const linkElement = screen.getByRole(`link-${article.id}`);
      expect(linkElement).toHaveAttribute(
        "href",
        `${SPORT_ARTICLE_URI}/${article.id}`
      );
    });
  });

  it("renders the Card components with the correct props", () => {
    render(<TeaserList articles={mockArticles} />);

    mockArticles.forEach((article) => {
      const cardElement = screen.getByTestId(`card-teaser-list-${article.id}`);
      const expectedSrc = expect.stringMatching(
        `%2Fimage-${article.id}.jpg&w=3840&q=75`
      );
      const imageElement = screen.getByTestId(`card-image-${article.id}`);
      expect(cardElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", expectedSrc);
      expect(cardElement).toHaveTextContent(article.titel);
      expect(cardElement).toHaveTextContent(article.labelType);
    });
  });
});
