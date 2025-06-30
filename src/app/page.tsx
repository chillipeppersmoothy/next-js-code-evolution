import Link from "next/link";

const RouterData = [
  { route: "/about", label: "About" },
  { route: "/products", label: "Products" },
  { route: "/complex-dashboard", label: "Complex Dashboard" },
  { route: "/counter?id=1&lang=en", label: "Counter" },
  { route: "/photo-feed", label: "Photo Feed" },
  { route: "/v1", label: "Auth" },
  { route: "/f1", label: "F1" },
  { route: "/test-api", label: "API" },
  { route: "/error", label: "Error" },
];

const RenderingData = [
  { route: "/product-catalogue", label: "Product Catalogue" },
  { route: "/streaming", label: "Streaming" },
  { route: "/server-route", label: "Server Route" },
  { route: "/client-route", label: "Client Route" },
  { route: "/interleaving-page", label: "Interleaving Page" },
];

const DataFetchingData = [
  { route: "/user-client", label: "User Client" },
  { route: "/user-server", label: "User Server" },
  { route: "/post-sequential", label: "Post Sequential" },
  { route: "/user-parallel/1", label: "User Parallel" },
];

export default function Home() {
  return (
    <div className="pl-2">
      <h1 className="text-3xl font-bold text-red-600">Welcome Home!</h1>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Router</h2>
        <ul>
          {RouterData.map((item, index) => (
            <li key={index}>
              <Link href={item.route} className="underline text-blue-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Rendering</h2>
        <ul>
          {RenderingData.map((item, index) => (
            <li key={index}>
              <Link href={item.route} className="underline text-blue-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Data Fetching</h2>
        <ul>
          {DataFetchingData.map((item, index) => (
            <li key={index}>
              <Link href={item.route} className="underline text-blue-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
