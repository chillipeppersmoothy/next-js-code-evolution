import ReveiwPage from "@/components/review";
import { Suspense } from "react";

export default function StreamPage() {
  return (
    <div>
      <h1>Stream Page</h1>
      <Suspense fallback={<h1>Loading Reviews page...</h1>}>
        <ReveiwPage />
      </Suspense>
    </div>
  );
}
