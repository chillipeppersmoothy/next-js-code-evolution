import Link from "next/link";

export default function Home() {
  return (
    <div className="pl-2">
      <h1 className="text-3xl font-bold text-red-600">Welcome Home!</h1>
      <ul>
        <li>
          <Link href="/about" className="underline text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/products" className="underline text-blue-600" replace>
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/complex-dashboard"
            className="underline text-blue-600"
            replace
          >
            Complex Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/counter?id=1&lang=en"
            className="underline text-blue-600"
          >
            Counter
          </Link>
        </li>
        <li>
          <Link href="/photo-feed" className="underline text-blue-600">
            Photo Feed
          </Link>
        </li>
        <li>
          <Link href="/v1" className="underline text-blue-600">
            Auth
          </Link>
        </li>
        <li>
          <Link href="/f1" className="underline text-blue-600">
            F1
          </Link>
        </li>
        <li>
          <Link href="/error" className="underline text-blue-600">
            Error
          </Link>
        </li>
      </ul>
    </div>
  );
}
