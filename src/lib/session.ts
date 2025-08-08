import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "server-only";

export async function createSession(token: {
  accessToken: string;
  refreshToken: string;
}) {
  const accessExpireAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const refreshExpireAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("accessToken", token.accessToken, {
    httpOnly: true,
    secure: true,
    expires: accessExpireAt,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("refreshToken", token.refreshToken, {
    httpOnly: true,
    secure: true,
    expires: refreshExpireAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}

export async function auth() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const isLogin = accessToken && refreshToken;
  const needToRefresh = !accessToken && refreshToken;
  const isLogout = !refreshToken;

  return {
    accessToken,
    refreshToken,
    isLogin,
    needToRefresh,
    isLogout,
  };
}

export async function ensureAuthenticated() {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/api/Account/login");
  }
}
