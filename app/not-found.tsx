"use client";
import { setNotFound } from "@/store/features/notFound/notFoundSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function NotFound() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotFound(true));
    return () => {
      dispatch(setNotFound(false));
    };
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div className="mb-8">
          <h2>Not found</h2>
          <p>Requested page doesn't exist.</p>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-4">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={() => router.push("/nieuws")}
          >
            Go to home page
          </button>
        </div>
      </div>
    </section>
  );
}
