'use server'
import 'server-only'

import { BASE_URL } from '@/config.server'
import { ICity } from '@/types/type'
import { apiFetch } from './base'

export const getCity = async (params: unknown): Promise<ICity[]> => {
    const url = new URLSearchParams(params as Record<string, string>)
    return apiFetch<ICity[]>(`${BASE_URL}/api/City/getAll?${url.toString()}`)
}
