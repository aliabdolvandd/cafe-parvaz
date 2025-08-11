'use client'

import { LoginAction } from '@/action/auth/loginAction'
import { LoginFormSchema, LoginType } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Lock, TriangleIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import HandleError from '../shared/form-item'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'

export default function LoginForm() {
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)
    const form = useForm<LoginType>({
        resolver: zodResolver(LoginFormSchema),
        mode: 'onTouched',
        defaultValues: {
            userName: '',
            password: '',
        },
    })

    const onSubmit = async (data: LoginType) => {
        setLoading(true)
        const result = await LoginAction(data)

        if (!result?.success) {
            setServerError(result?.message ?? null)
        }
        setLoading(false)
    }
    return (
        <div className="flex flex-col z-20 items-center justify-center gap-4 pt-36 sm:pt-3 py-4">
            <Card className="p-5 border-none shadow-md w-[50%] z-10 bg-background  ">
                <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="w-[80px] h-[80px] bg-secondary rounded-full flex items-center justify-center">
                        <Image
                            src="/vector.png"
                            alt="coffee"
                            width={42}
                            height={40}
                        />
                    </div>
                    <p className="text-[30px] font-bold p-1">
                        ورود به حساب کاربری
                    </p>
                </div>
                <p className="text-gray-400 text-center mb-2">
                    برای ورود نام کاربری یا ایمیل خود را وارد نمایید
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full max-w-sm mx-auto space-y-6"
                    >
                        {serverError && (
                            <Alert>
                                <TriangleIcon className="h-4 w-4" />
                                <AlertTitle>خطا!</AlertTitle>
                                <AlertDescription className="text-red-500 text-sm text-center">
                                    {serverError}
                                </AlertDescription>
                            </Alert>
                        )}
                        <FormField
                            control={form.control}
                            name="userName"
                            render={({ field, fieldState }) => (
                                <FormItem className="relative w-full">
                                    <div className="relative">
                                        <FormControl>
                                            <HandleError
                                                error={
                                                    fieldState.error?.message
                                                }
                                            >
                                                <Input
                                                    type="text"
                                                    className="w-full h-12 text-xs px-10 rounded-xl border border-primary text-right focus:outline-none"
                                                    {...field}
                                                />
                                            </HandleError>
                                        </FormControl>
                                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                                            <User2Icon className="text-primary h-5 w-5" />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field, fieldState }) => (
                                <FormItem className="relative w-full">
                                    <div className="relative">
                                        <FormControl>
                                            <HandleError
                                                error={
                                                    fieldState.error?.message
                                                }
                                            >
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    autoComplete="current-password"
                                                    id="password"
                                                    className="w-full h-12 text-xs px-10 rounded-xl border border-primary text-right focus:outline-none"
                                                />
                                            </HandleError>
                                        </FormControl>
                                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                                            <Lock className="text-primary h-5 w-5" />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button
                            disabled={loading}
                            type="submit"
                            className="w-full h-12 bg-primary text-white py-3 rounded-xl text-sm font-semibold disabled:bg-gray-600"
                        >
                            {loading ? (
                                <>
                                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                                    در حال ورود...
                                </>
                            ) : (
                                'ورود'
                            )}
                        </Button>
                        <p className="text-xs text-gray-500 text-center ">
                            حساب کاربری ندارید؟ همین حالا
                            <Link
                                href="/register"
                                className="text-md text-black font-bold mx-2 underline"
                            >
                                عضو
                            </Link>
                            شوید
                        </p>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
