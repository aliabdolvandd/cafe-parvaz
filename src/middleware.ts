import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/session";
import { refreshTokenAction } from "./action/auth/refrshToken";

const protectRoutes = {
  adminPanel: "/cart",
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const { isLogin, isLogout, needToRefresh } = await auth();

  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(req.nextUrl);
  }

  if (path.startsWith("/login") && isLogin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (Object.values(protectRoutes).some((route) => path.startsWith(route))) {
    if (isLogout) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  return NextResponse.next();
}
