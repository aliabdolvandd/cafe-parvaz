"use server";

import { apiFetch } from "@/api/base";
import { BASE_URL } from "@/config.server";
import { auth, createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function refreshTokenAction() {
  try {
    const { refreshToken } = await auth();
    const data = await apiFetch<{ accessToken: string; refreshToken: string }>(
      BASE_URL + "/api/Account/refreshToken",
      {
        method: "post",
        body: JSON.stringify({ refreshToken }),
      }
    );
    await createSession(data);
  } catch {
    await deleteSession();
    redirect("/login");
  }
}
