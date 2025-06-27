"use client";

export default function ErrorPage() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  const id = getRandomNumber();
  if (Math.floor(id % 2) === 0) {
    throw new Error("Testing error handling in Next.js");
  }
  return (
    <div>
      Error page, randomly generates number: {id}, refresh if you don&apos;t
      find it
    </div>
  );
}
