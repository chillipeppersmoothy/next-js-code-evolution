export default async function Blog() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve({});
    }, 2000)
  );
  return <h1 className="text-4xl text-bold p-2">My Blog</h1>;
}
