import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../index";

describe("Footer", () => {
  it("renders the Footer component", () => {
    render(<Footer />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toMatchSnapshot();
  });
});
