import { LoginType } from "@/lib/validation";
import { apiFetch } from "./base";
import { LoginResponse } from "@/types/type";
import { BASE_URL } from "@/config.server";

export async function loginRequest(params: LoginType) {
  const data = await apiFetch<LoginResponse>(`${BASE_URL}/api/Account/login`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}
