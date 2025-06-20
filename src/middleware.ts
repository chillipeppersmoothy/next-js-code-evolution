import { NextResponse, type NextRequest } from "next/server";

/** Custom matcher config */

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

/** Conditional config */

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/test-api", request.url));
//   }
// }

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "light");
  }

  response.headers.set("custom-headers", "value");

  return response;
} 
