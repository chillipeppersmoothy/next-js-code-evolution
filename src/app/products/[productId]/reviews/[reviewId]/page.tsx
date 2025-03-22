export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review Id {reviewId} for Product Id {productId}
    </h1>
  );
}
