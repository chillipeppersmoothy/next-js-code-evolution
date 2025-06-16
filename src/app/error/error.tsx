"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="pl-2">
      <h1 className="text-3xl font-bold text-red-600">Error Page</h1>
      <p className="text-red-500">
        An error has occurred: {error.message}. Please try again later.
      </p>
      <button
        className="bg-gray-200 p-2 m-2 cursor-pointer rounded-lg"
        onClick={reload}
      >
        Try Again
      </button>
    </div>
  );
}
