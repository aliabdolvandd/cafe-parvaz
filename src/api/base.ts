import { auth } from '@/lib/session'

export class ApiError extends Error {
    constructor(
        public status: number,
        public message: string,
        public code: number | undefined,
        public body?: Response
    ) {
        super(message)
        this.name = 'ApiError'
    }
}
export const apiFetch = async <T>(
    url: string,
    options?: RequestInit
): Promise<T> => {
    const { accessToken } = await auth().catch(() => ({ accessToken: '' }))
    const headers = {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...options?.headers,
    }

    const res = await fetch(url, {
        ...options,
        headers,
    })
    if (!res.ok) {
        const errorBody = await res.json()
        if ('code' in res && typeof res.code === 'number') {
            throw new ApiError(
                res.status,
                errorBody.message,
                res.code,
                errorBody
            )
        }
        throw new ApiError(res.status, errorBody.message, errorBody)
    }
    return res.json()
}
