"use client";

import { useRouter } from "next/navigation";

export default function Orders() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Order summary</h1>
      <button
        className="w-40 h-10 bg-gray-200 cursor-pointer"
        onClick={handleOnClick}
      >
        Place Order
      </button>
    </div>
  );
}
