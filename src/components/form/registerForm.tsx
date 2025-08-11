import { RegisterAction } from '@/action/auth/registerAction'
import { RegisterFormSchema, RegisterType } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, Loader, LucideEyeClosed, TriangleAlert } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import HandleError, { default as FormItems } from '../shared/form-item'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'

export default function RegisterForm() {
    const [serverError, setServerError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<RegisterType>({
        resolver: zodResolver(RegisterFormSchema),
        mode: 'onTouched',
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
        },
    })

    const onSubmit = async (data: RegisterType) => {
        setLoading(true)
        setServerError(null)
        const result = await RegisterAction(data)
        if (!result.success) {
            setServerError(result.message ?? null)
        }
        setLoading(false)
    }
    const formStyle =
        'w-full h-10 text-xs text-right px-3 rounded-xl border border-primary focus:outline-none placeholder:text-xs'
    return (
        <div className="flex flex-col items-center w-full justify-center gap-4 pt-36 sm:pt-3 py-4">
            <Card className="p-5 bg-background z-10 shadow-lg border-none">
                <div className="flex items-center gap-4">
                    <div className="w-[80px] h-[80px] bg-secondary rounded-full flex items-center justify-center">
                        <Image
                            src="/vector.png"
                            alt="coffee"
                            width={42}
                            height={40}
                        />
                    </div>
                    <p className="text-[30px] font-bold p-1">
                        ساخت حساب کاربری
                    </p>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full mt-4 max-w-sm mx-auto space-y-6 "
                    >
                        {serverError && (
                            <Alert>
                                <TriangleAlert className="h-4 w-4" />
                                <AlertTitle>اخطار!</AlertTitle>
                                <AlertDescription className="text-red-500 text-sm text-center ">
                                    {serverError}
                                </AlertDescription>
                            </Alert>
                        )}
                        <div className="flex gap-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field, fieldState }) => (
                                    <FormItem className="w-[50%]">
                                        <FormControl>
                                            <HandleError
                                                error={
                                                    fieldState.error?.message
                                                }
                                            >
                                                <Input
                                                    placeholder="نام"
                                                    type="text"
                                                    className="w-full h-10 text-xs px-3 rounded-xl border border-primary text-right focus:outline-none placeholder:text-xs"
                                                    {...field}
                                                />
                                            </HandleError>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field, fieldState }) => (
                                    <FormItem className="w-[50%]">
                                        <FormControl>
                                            <FormItems
                                                error={
                                                    fieldState.error?.message
                                                }
                                            >
                                                <Input
                                                    type="text"
                                                    placeholder="نام خانوادگی"
                                                    className="w-full h-10 text-xs text-right px-3 rounded-xl border border-primary focus:outline-none placeholder:text-xs"
                                                    {...field}
                                                />
                                            </FormItems>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <HandleError
                                            error={fieldState.error?.message}
                                        >
                                            <Input
                                                type="email"
                                                placeholder="ایمیل"
                                                className={formStyle}
                                                {...field}
                                            />
                                        </HandleError>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <HandleError
                                            error={fieldState.error?.message}
                                        >
                                            <Input
                                                maxLength={11}
                                                type="text"
                                                placeholder="شماره تلفن"
                                                className={formStyle}
                                                {...field}
                                            />
                                        </HandleError>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <div className="relative">
                                        <FormControl>
                                            <HandleError
                                                error={
                                                    fieldState.error?.message
                                                }
                                            >
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    placeholder="رمز عبور"
                                                    className={formStyle}
                                                    {...field}
                                                />
                                            </HandleError>
                                        </FormControl>
                                        <div
                                            className="absolute top-1/2 left-3 transform -translate-y-1/2"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeIcon size={20} />
                                            ) : (
                                                <LucideEyeClosed size={20} />
                                            )}
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <Button
                            disabled={loading}
                            type="submit"
                            className="w-full h-10 bg-primary text-white py-3 rounded-xl text-sm font-semibold disabled:bg-gray-600"
                        >
                            {loading ? (
                                <>
                                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                                    در حال عضو شدن
                                </>
                            ) : (
                                'عضویت'
                            )}
                        </Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
