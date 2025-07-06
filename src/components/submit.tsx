"use client";

import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending, action, method, data } = useFormStatus();
  console.log(pending, action, method, data);
  return (
    <button
      type="submit"
      className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 mt-2 cursor-pointer"
      disabled={pending}
    >
      Submit
    </button>
  );
};
