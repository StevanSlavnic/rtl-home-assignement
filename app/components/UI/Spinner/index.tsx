import React from "react";

export default function Spinner({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <div
      data-testid="spinner"
      className="flex justify-center items-center mt-10"
    >
      <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-800" />
    </div>
  );
}
