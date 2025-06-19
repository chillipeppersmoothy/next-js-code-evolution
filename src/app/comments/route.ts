import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredQuery = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredQuery);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const data = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(data);

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
