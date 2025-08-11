'use server'
import { BASE_URL } from '@/config.server'
import { IBrand } from '@/types/type'
import 'server-only'
import { apiFetch } from './base'

export const createBrand = async (body: Partial<IBrand>): Promise<IBrand> => {
    return apiFetch<IBrand>(`${BASE_URL}/api/Brand`, {
        method: 'post',
        body: JSON.stringify(body),
    })
}

export const getBrands = async (params?: unknown): Promise<IBrand[]> => {
    const search = new URLSearchParams(params as Record<string, string>)
    const fullUrl = `${BASE_URL}/api/Brand?${search.toString()}`
    return apiFetch<IBrand[]>(fullUrl, {
        cache: 'no-store',
    })
}
