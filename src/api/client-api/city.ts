import { ICity } from '@/types/type'
import { useQuery } from '@tanstack/react-query'
import Axios from './base'

async function getAllCity(params: { q?: string }) {
    const res = await Axios.get<ICity>('/api/City', {
        params: { ...params },
    })
    return res.data
}

export function useQueryCity(q: string) {
    return useQuery({
        queryKey: ['city', q],
        queryFn: () => getAllCity({ q }),
    })
}
