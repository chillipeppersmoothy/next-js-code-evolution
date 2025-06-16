import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>F1 Page</h1>
      <Link href="/f1/f2" className="text-blue-500 underline">
        F2 page
      </Link>
    </div>
  );
}
