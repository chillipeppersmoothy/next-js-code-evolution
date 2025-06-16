"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Counter id {id}</h1>
      <p>
        Current count: <span id="counter">{count}</span>
      </p>
      <button
        className="p-2 rounded-xl my-2 bg-gray-300 cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
