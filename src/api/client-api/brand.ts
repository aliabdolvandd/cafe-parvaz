import { IBrand, PaginatedResultApi } from "@/types/type";
import Axios from "./base";
import { useQuery } from "@tanstack/react-query";

async function getAllBrands(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IBrand>>("/api/Brand", {
    params: { ...params, pageSize: 10 },
  });
  return res.data;
}

export function useBrandQuery(q: string) {
  return useQuery({
    queryKey: ["brand", q],
    queryFn: () => getAllBrands({ q }),
  });
}
