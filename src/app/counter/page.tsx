import { Suspense } from "react";
import { Counter } from "./counter";

export default function CounterComp() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Counter />
    </Suspense>
  );
}
