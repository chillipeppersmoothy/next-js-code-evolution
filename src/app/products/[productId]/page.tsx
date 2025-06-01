import { Metadata } from "next";

type ProductDetailsType = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: ProductDetailsType): Promise<Metadata> => {
  const { productId } = await params;

  return {
    title: `Product id is ${productId}`,
  };
};

export default async function ProductDetails({ params }: ProductDetailsType) {
  const { productId } = await params;
  return <h1>Product Details {productId}</h1>;
}
