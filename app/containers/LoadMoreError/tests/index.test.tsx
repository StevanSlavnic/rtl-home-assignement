import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadMoreError from "../index";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("LoadMoreError", () => {
  const mockRouter = {
    refresh: jest.fn(),
    push: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it("renders the error message and buttons when error is true", () => {
    render(<LoadMoreError error={true} />);

    expect(screen.getByText("Error fetching articles")).toBeInTheDocument();
    expect(screen.getByText("Try again")).toBeInTheDocument();
    expect(screen.getByText("Go to home")).toBeInTheDocument();
  });

  it("does not render the error message and buttons when error is false", () => {
    render(<LoadMoreError error={false} />);

    expect(
      screen.queryByText("Error fetching articles")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Try again")).not.toBeInTheDocument();
    expect(screen.queryByText("Go to home")).not.toBeInTheDocument();
  });

  it('calls router.refresh when "Try again" button is clicked', () => {
    render(<LoadMoreError error={true} />);

    fireEvent.click(screen.getByText("Try again"));
    expect(mockRouter.refresh).toHaveBeenCalled();
  });

  it('calls router.push("/") when "Go to home" button is clicked', () => {
    render(<LoadMoreError error={true} />);

    fireEvent.click(screen.getByText("Go to home"));
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
