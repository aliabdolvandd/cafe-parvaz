"use server";
import "server-only";
import { createSession } from "@/lib/session";
import { RegisterFormSchema, RegisterType } from "@/lib/validation";
import { RegisterRequest } from "@/api/auth";
import { ApiError } from "@/api/base";

export async function RegisterAction(data: RegisterType) {
  const validated = RegisterFormSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }
  try {
    const result = await RegisterRequest(validated.data);

    if (!result.token) {
      return {
        success: false,
        message: "ثبت نام ناموق بود ",
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
      message: "خطای ناشناخته",
    };
  }
}
