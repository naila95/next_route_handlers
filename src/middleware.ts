import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/dashboard") {
    // return NextResponse.redirect(new URL("/hello", request.url));

    const response = NextResponse.next();
    const themePreference = request.cookies.get("token");

    if (!themePreference) {
      response.cookies.set("token", "12345");
    }

    response.headers.set("headers-content", "custom value");
    return response;
    // burda route deyismir amma yazi deyisir:
    return NextResponse.rewrite(new URL("/hello", request.url));
  }
}
