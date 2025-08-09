"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Loader, Lock, TriangleIcon, User2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginFormSchema, LoginType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginAction } from "@/action/auth/loginAction";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onTouched",
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    setLoading(true);
    const result = await LoginAction(data);
    if (!result.success) {
      setServerError(result.message ?? null);
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-36 sm:pt-3 py-4">
      <div className="w-[80px] h-[80px] bg-secondary rounded-full flex items-center justify-center">
        <Image src="/vector.png" alt="coffee" width={42} height={40} />
      </div>
      <p className="text-[30px] font-bold p-1">ورود به حساب کاربری</p>
      <p className="text-gray-400">
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
            render={({ field }) => (
              <FormItem className="relative w-full">
                <div className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      className="w-full h-12 text-xs px-10 rounded-xl border border-primary text-right focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                    <User2Icon className="text-primary h-5 w-5" />
                  </div>
                </div>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      autoComplete="current-password"
                      id="password"
                      className="w-full h-12 text-xs px-10 rounded-xl border border-primary text-right focus:outline-none"
                    />
                  </FormControl>
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                    <Lock className="text-primary h-5 w-5" />
                  </div>
                </div>
                <FormMessage className="text-xs text-red-500 mt-1" />
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
              "ورود"
            )}
          </Button>
          <p className="text-xs text-gray-500 text-center ">
            حساب کاربری ندارید؟همین حالا
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
    </div>
  );
}
