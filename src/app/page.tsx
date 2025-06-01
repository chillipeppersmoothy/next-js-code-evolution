import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products" replace>
            Products
          </Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
}
