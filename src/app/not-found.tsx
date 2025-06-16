import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-bold text-5xl">Page not found</h1>
      <h3 className="mt-5 mb-3">
        Back to{" "}
        <Link href="/" className="text-blue-500 underline">
          home page
        </Link>
      </h3>
    </div>
  );
}
