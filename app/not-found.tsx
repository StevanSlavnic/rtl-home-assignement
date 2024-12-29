"use client";
import { setNotFound } from "@/store/features/notFound/notFoundSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function NotFound() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotFound(true));
    return () => {
      dispatch(setNotFound(false));
    };
  }, []);

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
