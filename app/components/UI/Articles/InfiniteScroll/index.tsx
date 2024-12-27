"use client";

import fetchArticles from "@/app/actions/actions";
import { useState, useRef, useEffect, useCallback } from "react";

export default function InfiniteScroll({
  initialArticles,
}: {
  initialArticles: any[];
}) {
  const [page, setPage] = useState(1);
  console.log("page :", page);
  const [articles, setArticles] = useState<any[]>(initialArticles);
  const [hasMoreData, setHasMoreData] = useState(true);
  const scrollTrigger = useRef(null);

  const loadMoreArticles = useCallback(async () => {
    if (hasMoreData) {
      const response = await fetchArticles(page + 1, 12);

      if (!response.data.length) {
        setHasMoreData(false);
      }

      setArticles((prevArticles) => [...prevArticles, ...response.data]);
      setPage(page + 1);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Visible");
          // Fetch more data
          loadMoreArticles();
        }
      },
      { threshold: 0.5 }
    );

    if (scrollTrigger.current) {
      observer.observe(scrollTrigger.current);
    }

    // Cleanup
    return () => {
      if (scrollTrigger.current) {
        observer.unobserve(scrollTrigger.current);
      }
    };
  }, [scrollTrigger]);

  return (
    <div>
      <div className="text-center text-slate-600 mt-5">
        {hasMoreData ? (
          <div ref={scrollTrigger}>Loading...</div>
        ) : (
          <p className="text-slate-600">No more posts to load</p>
        )}
      </div>
    </div>
  );
}
