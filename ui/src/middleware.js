import { NextResponse } from "next/server";
export const middleware = (request) => {
  const pathVaiable = request.nextUrl.pathname;
  const type = request.cookies.get("type");
  const authentication = [
    // "/registration",
    // "/update-password",
    // "/forget-password",
    "/login",
  ];
  const auth = request.cookies.get("token") || "";
  if (authentication.includes(pathVaiable) && auth) {
    return NextResponse.redirect(new URL("/chat", request.url));
  }
  /*    const protectedRoutes = [ '/user/:path*'];
    if (!auth && protectedRoutes.includes(pathVaiable)) {
        return NextResponse.redirect(new URL("/login", request.url))
    }*/

  if (!auth && pathVaiable.startsWith("/chat")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (type?.value !== "admin" && pathVaiable.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  /*    matcher:[
            '/',
            '/update-profile',
            '/forget-password',
            '/update-password',
            '/register',
            '/login'
        ]*/

  matcher: "/:path*",
};
