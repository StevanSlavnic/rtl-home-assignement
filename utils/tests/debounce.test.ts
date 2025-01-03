import debounce from "../debounce";

describe("debounce", () => {
  jest.useFakeTimers();

  it("should call the function once after the wait period", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);

    debouncedFunc();
    jest.advanceTimersByTime(500);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should call the function twice after the wait period", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(2);
  });
});
