import { useRouter } from "next/navigation";

export default function LoadMoreError({ error }: { error: boolean | null }) {
  const router = useRouter();

  return (
    <>
      {error && (
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="p-4">Error fetching articles</div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-4 gap-4">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => {
                router.refresh();
              }}
            >
              Try again
            </button>
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => {
                router.push("/");
              }}
            >
              Go to home
            </button>
          </div>
        </div>
      )}
    </>
  );
}
