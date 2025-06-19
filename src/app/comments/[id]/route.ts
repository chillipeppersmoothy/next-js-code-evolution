import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((data) => String(data.id) === id);

  return new Response(JSON.stringify(comment));
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();
  const index = comments.findIndex((comment) => comment.id === Number(id));
  comments[index].text = text;

  return new Response(JSON.stringify({ id: Number(id), text }));
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === Number(id));
  comments.splice(index, 1);

  return new Response(JSON.stringify({ message: "Deleted Successfully" }));
}
