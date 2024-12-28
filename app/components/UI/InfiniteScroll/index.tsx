"use client";

import { InView } from "react-intersection-observer";

export default function InfiniteScroll({
  isEnabled,
  hasMoreData,
  onScroll,
}: {
  isEnabled: boolean;
  hasMoreData?: boolean;
  onScroll: () => void;
}) {
  if (!isEnabled || !hasMoreData) {
    return null;
  }

  return (
    <div data-testid="infinite-scroll">
      <InView as={"div"} onChange={(inView) => inView && onScroll()}></InView>
    </div>
  );
}
