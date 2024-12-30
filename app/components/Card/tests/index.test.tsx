import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../index";

const mockProps = {
  id: "1",
  titel: "Test Title",
  labelType: "Test Label",
  image: "/image.jpg",
  cardType: "teaser",
};

describe("Card", () => {
  it("renders the Card component", () => {
    render(<Card {...mockProps} />);

    const cardElement = screen.getByTestId(
      `card-${mockProps.cardType}-${mockProps.id}`
    );
    expect(cardElement).toBeInTheDocument();
  });

  it("renders the image with the correct src and alt attributes", () => {
    render(<Card {...mockProps} />);

    const imageElement = screen.getByTestId(`card-image-${mockProps.id}`);
    const expectedSrc = expect.stringMatching("%2Fimage.jpg&w=3840&q=75");
    expect(imageElement).toHaveAttribute("src", expectedSrc);
    expect(imageElement).toHaveAttribute("alt", mockProps.titel);
  });

  it("renders the title with the correct text", () => {
    render(<Card {...mockProps} />);

    const titleElement = screen.getByText(mockProps.titel);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the label with the correct text", () => {
    render(<Card {...mockProps} />);

    const labelElement = screen.getByText(mockProps.labelType);
    expect(labelElement).toBeInTheDocument();
  });

  it("applies the correct class names based on cardType", () => {
    render(<Card {...mockProps} />);

    const cardElement = screen.getByTestId(
      `card-${mockProps.cardType}-${mockProps.id}`
    );
    expect(cardElement).toHaveClass(`card ${mockProps.cardType}`);

    const imageContainer = screen.getByRole("img").parentElement;
    expect(imageContainer).toHaveClass(`card-image ${mockProps.cardType}`);

    const headlineElement = screen.getByText(mockProps.titel).parentElement;

    waitFor(() => {
      expect(headlineElement).toHaveClass(
        `card-headline ${mockProps.cardType}`
      );
    });
  });
});
