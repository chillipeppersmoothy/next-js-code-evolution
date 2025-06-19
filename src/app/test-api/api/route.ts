// import { headers } from "next/headers";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // const requestHeaders = await headers();
  console.log("request headers ->", requestHeaders.get("Authorization"));

  const cookieStore = await cookies();
  cookieStore.set("results", "20");

  console.log("cookieStore", cookieStore.get("results"));

  return new Response("<h1>Hello World</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
