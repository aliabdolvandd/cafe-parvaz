'use server'
import 'server-only'

import { loginRequest } from '@/api/auth'
import { ApiError } from '@/api/base'
import { createSession } from '@/lib/session'
import { LoginFormSchema, LoginType } from '@/lib/validation'

export async function LoginAction(data: LoginType) {
    const validated = LoginFormSchema.safeParse(data)

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
        }
    }

    try {
        const result = await loginRequest(validated.data)

        if (!result?.token) {
            return {
                success: false,
                message: 'ورود ناموفق بود',
            }
        }

        await createSession({
            accessToken: result.token.accessToken,
            refreshToken: result.token.refreshToken,
        })

        return { success: true }
    } catch (e) {
        // console.log(e, 'errrrrrrr')
        if (e instanceof ApiError) {
            console.log(e, 'eeeeeeee')

            return {
                success: false,
                message: e?.message,
                errors: e,
                statue: e.status,
            }
        }
    }
}
