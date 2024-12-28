"use client";
import { InView } from "react-intersection-observer";

export default function InfiniteScroll({
  hasMoreData,
  onChange,
}: {
  hasMoreData?: boolean;
  onChange: () => void;
}) {
  return (
    <div>
      <InView
        as={"div"}
        threshold={1}
        onChange={(inView) => inView && onChange()}
      >
        <div className="text-center text-slate-600 mt-5">
          {hasMoreData ? (
            <div>Loading...</div>
          ) : (
            <p className="text-slate-600">No more posts to load</p>
          )}
        </div>
      </InView>
    </div>
  );
}
