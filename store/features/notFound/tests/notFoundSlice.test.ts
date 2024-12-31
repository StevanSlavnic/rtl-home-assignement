import reducer, { setNotFound } from "../notFoundSlice";

describe("notFoundSlice", () => {
  const initialState = false;

  it("should handle setNotFound to true", () => {
    const nextState = reducer(initialState, setNotFound(true));
    expect(nextState).toBe(true);
  });

  it("should handle setNotFound to false", () => {
    const nextState = reducer(initialState, setNotFound(false));
    expect(nextState).toBe(false);
  });
});
