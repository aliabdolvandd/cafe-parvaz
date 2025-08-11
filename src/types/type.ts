import { ReactNode } from 'react'

export type FormState<T> =
    | {
          errors: Partial<Record<keyof T, string[]>>
          message?: undefined
      }
    | {
          message: string
          errors?: undefined
      }
    | {
          message: string
          errors: unknown
      }
    | undefined

export type RegisterResponse = {
    token: {
        accessToken: string
        refreshToken: string
    }
}

export type LoginResponse = RegisterResponse

export interface PaginatedResultApi<T> {
    results: Array<T>
    total: number
    totalPages: number
    page: number
    pageSize: number
}

export type ServerPageProps = {
    params: Promise<{ [key: string]: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export interface GetParams {
    page?: string
    limit?: string
    search?: string
    sort?: string
}

export interface IBrand {
    id: string
    name: string
    description?: string | null
    imageUrl?: string | null
    isActive: boolean
}
export interface Column<T extends { id?: string; _id?: string }> {
    title: string
    render: (row: T) => ReactNode
}

export interface ICity {
    id: string
    name: string
    isActive: boolean
}
