import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../index";

describe("Logo", () => {
  it("renders the Logo component", () => {
    render(<Logo />);

    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toMatchSnapshot();
  });
});
