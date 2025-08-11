"use server";
import "server-only";
import { IBrand } from "@/types/type";
import { apiFetch } from "./base";
import { BASE_URL } from "@/config.server";

export const createBrand = async (body: Partial<IBrand>): Promise<IBrand> => {
  return apiFetch<IBrand>(`${BASE_URL}/api/Brand`, {
    method: "post",
    body: JSON.stringify(body),
  });
};

export const getBrands = async (params?: unknown): Promise<IBrand[]> => {
  const search = new URLSearchParams(params as Record<string, string>);
  const fullUrl = `${BASE_URL}/api/Brand?${search.toString()}`;
  console.log("Fetching brands from:", fullUrl);
  return apiFetch<IBrand[]>(fullUrl, {
    cache: "no-store",
  });
};
