"use server";
import "server-only";
import { ApiError } from "@/api/base";
import { createBrand } from "@/api/brand";
import { BrandSchema, BrandType } from "@/lib/validation";

export default async function CreateBrandAction(data: BrandType) {
  const validated = BrandSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }
  try {
    await createBrand(validated.data);
    return { success: true };
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
        errors: e.body?.errors,
      };
    }
    return { success: false, message: "خطای ناشناخته" };
  }
}
