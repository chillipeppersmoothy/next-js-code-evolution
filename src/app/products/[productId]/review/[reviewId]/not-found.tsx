"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const path = pathName.split("/");

  const productId = path[2];
  const reviewId = path.pop();
  return (
    <h1>
      Review {reviewId} not found for product {productId}
    </h1>
  );
}
