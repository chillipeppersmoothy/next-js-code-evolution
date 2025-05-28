type ProductDetailsType = {
  params: Promise<{ productId: string }>;
};

export default async function ProductDetails({ params }: ProductDetailsType) {
  const { productId } = await params;
  return <h1>Product Details {productId}</h1>;
}
