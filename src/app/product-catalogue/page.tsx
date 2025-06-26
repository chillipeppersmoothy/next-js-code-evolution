import Link from "next/link";

export default async function ProductCatelogue() {
  return (
    <div>
      <h2 className="font-bold text-2xl">Products</h2>
      <div className="flex flex-col gap-2 underline text-blue-500 ml-2">
        <Link href="/product-catalogue/1">Product 1</Link>
        <Link href="/product-catalogue/2">Product 2</Link>
        <Link href="/product-catalogue/3">Product 3</Link>
      </div>
    </div>
  );
}
