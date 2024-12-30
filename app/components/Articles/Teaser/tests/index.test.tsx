import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Teaser from "../index";
import { IArticle } from "@/app/types";
import { SPORT_ARTICLE_URI } from "@/app/constants";

jest.mock("next/navigation", () => {
  const router = {
    push: jest.fn(),
    query: {},
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

const mockArticle: IArticle = {
  id: 1,
  titel: "Test Title",
  labelType: "Test Label",
  afbeelding: "/image.jpg",
};

describe("Teaser", () => {
  it("renders the Teaser component", () => {
    render(<Teaser article={mockArticle} />);

    const teaserElement = screen.getByTestId("teaser");
    expect(teaserElement).toBeInTheDocument();
  });

  it("contains a link with the correct href", () => {
    render(<Teaser article={mockArticle} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute(
      "href",
      `${SPORT_ARTICLE_URI}/${mockArticle.id}`
    );
  });

  it("renders the Card component with the correct props", () => {
    render(<Teaser article={mockArticle} />);

    const cardElement = screen.getByTestId(`card-teaser-${mockArticle.id}`);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent(mockArticle.titel);
    expect(cardElement).toHaveTextContent(mockArticle.labelType);
  });

  it("renders the image with the correct src", () => {
    render(<Teaser article={mockArticle} />);

    const cardImageElement = screen.getByTestId(`card-image-${mockArticle.id}`);
    const expectedSrc = expect.stringMatching("%2Fimage.jpg&w=3840&q=75");

    expect(cardImageElement).toHaveAttribute("alt", mockArticle.titel);
    expect(cardImageElement).toHaveAttribute("src", expectedSrc);
    expect(cardImageElement).toHaveAttribute("srcset", expectedSrc);
  });
});
