"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-md bg-green-700 px-6 py-3 text-white hover:bg-green-800 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
