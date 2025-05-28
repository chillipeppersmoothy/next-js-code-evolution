import { notFound } from "next/navigation";

type ReveiwsDetailType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export default async function ReviewsDetail({ params }: ReveiwsDetailType) {
  const { productId, reviewId } = await params;

  if (Number(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Product Review {reviewId} for product {productId}
    </h1>
  );
}
