import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("isAuthenticated");
  const isCategoryPage = request.nextUrl.pathname.startsWith("/dashboard"); // Category page check

  // If user is NOT authenticated and trying to access category page, redirect to sign-in
  if (!isAuthenticated && isCategoryPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // If user is authenticated and trying to access sign-in page, redirect to category
  if (isAuthenticated && request.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/category/:path*", "/sign-in"], // Middleware only affects category and sign-in pages
};
