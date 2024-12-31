import reducer, { setPage } from "../paginationSlice";

describe("paginationSlice", () => {
  const initialState = {
    page: 1,
  };

  it("should handle setPage", () => {
    const nextState = reducer(initialState, setPage(2));
    expect(nextState.page).toBe(2);
  });

  it("should handle setPage to initial state", () => {
    const nextState = reducer(initialState, setPage(1));
    expect(nextState.page).toBe(1);
  });
});
