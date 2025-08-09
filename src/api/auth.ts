import { LoginType, RegisterType } from "@/lib/validation";
import { apiFetch } from "./base";
import { LoginResponse, RegisterResponse } from "@/types/type";
import { BASE_URL } from "@/config.server";

export async function loginRequest(params: LoginType) {
  const data = await apiFetch<LoginResponse>(`${BASE_URL}/api/Account/login`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}

export async function RegisterRequest(param: RegisterType) {
  const data = await apiFetch<RegisterResponse>(
    `${BASE_URL}/api/Account/register`,
    {
      method: "post",
      body: JSON.stringify(param),
    }
  );
  return data;
}
