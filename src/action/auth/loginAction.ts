"use server";
import "server-only";
import { ApiError } from "@/api/base";
import { loginRequest } from "@/api/login";
import { createSession } from "@/lib/session";
import { LoginFormSchema, LoginType } from "@/lib/validation";

export async function LoginAction(data: LoginType) {
  const validated = LoginFormSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await loginRequest(validated.data);

    if (!result?.token) {
      return {
        success: false,
        message: "ورود ناموفق بود",
      };
    }

    await createSession({
      accessToken: result.token.accessToken,
      refreshToken: result.token.refreshToken,
    });

    return { success: true };
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
        errors: e.body?.errors,
      };
    }

    return {
      success: false,
      message: "خطای ناشناخته‌ای رخ داد",
    };
  }
}
