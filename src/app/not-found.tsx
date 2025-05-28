import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <h3>
        Back to <Link href="/">home page</Link>
      </h3>
    </div>
  );
}
