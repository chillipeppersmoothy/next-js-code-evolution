export default async function Profile({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return <h1>Profile {id}</h1>;
}
