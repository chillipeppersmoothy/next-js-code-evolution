export const dynamic = "force-static";
export const revalidate = 60;

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export async function GET() {
  return Response.json(data);
}
