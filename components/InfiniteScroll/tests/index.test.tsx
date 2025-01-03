import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfiniteScroll from "../index";

jest.mock("react-intersection-observer", () => ({
  // eslint-disable-next-line
  InView: ({ as: Component, onChange }: any) => {
    return <Component onChange={() => onChange(true)} />;
  },
}));

describe("InfiniteScroll", () => {
  it("renders the InfiniteScroll component when enabled and has more data", () => {
    render(<InfiniteScroll isDisabled={false} onScroll={jest.fn()} />);

    const infiniteScrollElement = screen.getByTestId("infinite-scroll");
    expect(infiniteScrollElement).toBeInTheDocument();
  });

  it("does not render the InfiniteScroll component when not enabled", () => {
    render(<InfiniteScroll isDisabled={true} onScroll={jest.fn()} />);

    const infiniteScrollElement = screen.queryByTestId("infinite-scroll");
    expect(infiniteScrollElement).not.toBeInTheDocument();
  });

  it("does not render the InfiniteScroll component when there is no more data", () => {
    render(<InfiniteScroll isDisabled={true} onScroll={jest.fn()} />);

    const infiniteScrollElement = screen.queryByTestId("infinite-scroll");
    expect(infiniteScrollElement).not.toBeInTheDocument();
  });

  it("calls the onScroll function when in view", async () => {
    const onScrollMock = jest.fn();
    render(<InfiniteScroll isDisabled={true} onScroll={onScrollMock} />);

    waitFor(() => {
      expect(onScrollMock).toHaveBeenCalledTimes(1);
    });
  });
});
