"use client";

import { InView } from "react-intersection-observer";

export default function InfiniteScroll({
  isDisabled,
  onScroll,
}: {
  isDisabled: boolean;
  onScroll: () => void;
}) {
  if (isDisabled) {
    return null;
  }

  return (
    <div data-testid="infinite-scroll">
      <InView as={"div"} onChange={(inView) => inView && onScroll()}></InView>
    </div>
  );
}
