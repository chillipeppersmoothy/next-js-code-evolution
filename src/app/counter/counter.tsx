"use client";

import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Current count: <span id="counter">{count}</span>
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
