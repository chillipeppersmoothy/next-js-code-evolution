export default async function ReviewPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Review Page</h1>;
}
