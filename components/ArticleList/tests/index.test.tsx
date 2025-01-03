import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleList from "../index";
import { IArticle } from "@/types";
import { generateArticleUrl } from "@/utils/generateArticleUrl";

jest.mock("../../../utils/generateArticleUrl");

const mockArticles: IArticle[] = [
  {
    id: 1,
    titel: "Test Article 1",
    labelType: "Label 1",
    afbeelding: "/image1.jpg",
  },
  {
    id: 2,
    titel: "Test Article 2",
    labelType: "Label 2",
    afbeelding: "/image2.jpg",
  },
];

describe("ArticleList", () => {
  beforeEach(() => {
    (generateArticleUrl as jest.Mock).mockImplementation(
      (id, titel) => `/articles/${id}/${titel.replace(/ /g, "-").toLowerCase()}`
    );
  });

  const renderComponent = (type: "base" | "teaser" | "teaser-list") => {
    render(
      <ArticleList
        testid="article-list"
        styles="test-styles"
        type={type}
        articles={mockArticles}
      />
    );
  };

  describe("base type", () => {
    it("renders the ArticleList component with base type", () => {
      renderComponent("base");
      const articleListElement = screen.getByTestId("article-list");
      expect(articleListElement).toBeInTheDocument();
      expect(articleListElement).toHaveClass("test-styles");
    });

    it("renders the correct number of articles with base type", () => {
      renderComponent("base");
      const articleLinks = screen.getAllByRole("link");
      expect(articleLinks).toHaveLength(mockArticles.length);
    });

    it("renders articles with correct links and content for base type", () => {
      renderComponent("base");
      mockArticles.forEach((article) => {
        const articleLink = screen.getByTestId(`article-link-${article.id}`);
        expect(articleLink).toHaveAttribute(
          "href",
          generateArticleUrl(article.id, article.titel)
        );
        expect(screen.getByText(article.titel)).toBeInTheDocument();
      });
    });
  });

  describe("teaser type", () => {
    it("renders the ArticleList component with teaser type", () => {
      renderComponent("teaser");
      const articleListElement = screen.getByTestId("article-list");
      expect(articleListElement).toBeInTheDocument();
      expect(articleListElement).toHaveClass("test-styles");
    });

    it("renders the correct number of articles with teaser type", () => {
      renderComponent("teaser");
      const articleLinks = screen.getAllByRole("link");
      expect(articleLinks).toHaveLength(mockArticles.length);
    });

    it("renders articles with correct links and content for teaser type", () => {
      renderComponent("teaser");
      mockArticles.forEach((article) => {
        const articleLink = screen.getByTestId(`article-link-${article.id}`);
        expect(articleLink).toHaveAttribute(
          "href",
          generateArticleUrl(article.id, article.titel)
        );
        expect(screen.getByText(article.titel)).toBeInTheDocument();
      });
    });
  });

  describe("teaser-list type", () => {
    it("renders the ArticleList component with teaser-list type", () => {
      renderComponent("teaser-list");
      const articleListElement = screen.getByTestId("article-list");
      expect(articleListElement).toBeInTheDocument();
      expect(articleListElement).toHaveClass("test-styles");
    });

    it("renders the correct number of articles with teaser-list type", () => {
      renderComponent("teaser-list");
      const articleLinks = screen.getAllByRole("link");
      expect(articleLinks).toHaveLength(mockArticles.length);
    });

    it("renders articles with correct links and content for teaser-list type", () => {
      renderComponent("teaser-list");
      mockArticles.forEach((article) => {
        const articleLink = screen.getByTestId(`article-link-${article.id}`);
        expect(articleLink).toHaveAttribute(
          "href",
          generateArticleUrl(article.id, article.titel)
        );
        expect(screen.getByText(article.titel)).toBeInTheDocument();
      });
    });
  });
});
