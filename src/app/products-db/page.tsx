import { getProducts } from "@/db/prisma-db";
import { ProductDetail } from "./product-detail";
import Search from "@/components/search";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    <div>
      <Search />
      <ProductDetail products={products} />
    </div>
  );
}
