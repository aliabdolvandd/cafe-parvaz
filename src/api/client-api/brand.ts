import { IBrand } from '@/types/type'
import { useQuery } from '@tanstack/react-query'
import Axios from './base'

async function getAllBrands(params: { q?: string }) {
    const res = await Axios.get<IBrand>('/api/Brand', {
        params: { ...params },
    })
    return res.data
}

export function useBrandQuery(q: string) {
    return useQuery({
        queryKey: ['brand', q],
        queryFn: () => getAllBrands({ q }),
    })
}
