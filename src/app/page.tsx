import Link from "next/link";

export default function Home() {
  return (
    <div className="pl-2">
      <h1 className="text-3xl font-bold text-red-600">Welcome Home!</h1>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Router</h2>
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
            <Link href="/test-api" className="underline text-blue-600">
              API
            </Link>
          </li>
          <li>
            <Link href="/error" className="underline text-blue-600">
              Error
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Rendering</h2>
        <ul>
          <li>
            <Link href="/product-catalogue" className="underline text-blue-500">
              Product Catalogue
            </Link>
          </li>
          <li>
            <Link href="/streaming" className="underline text-blue-500">
              Streaming
            </Link>
          </li>
          <li>
            <Link href="/server-route" className="underline text-blue-500">
              Server Route
            </Link>
          </li>
          <li>
            <Link href="/client-route" className="underline text-blue-500">
              Client Route
            </Link>
          </li>
          <li>
            <Link href="/interleaving-page" className="underline text-blue-500">
              Interleaving Page
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Data Fetching</h2>
        <ul>
          <li>
            <Link href="/user-client" className="underline text-blue-500">
              User Client
            </Link>
          </li>
          <li>
            <Link href="/user-server" className="underline text-blue-500">
              User Server
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
