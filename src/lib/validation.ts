import { z } from "zod";
import { FormState } from "@/types/type";

export const LoginFormSchema = z.object({
  userName: z
    .string()
    .min(1, { message: "وارد کردن ایمیل یا نام کاربری الزامی است" })
    .refine(
      (val) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        const isUsername = /^[a-zA-Z0-9._]{3,}$/.test(val);
        return isEmail || isUsername;
      },
      {
        message: "لطفاً یک ایمیل یا نام کاربری معتبر وارد نمایید",
      }
    ),

  password: z
    .string()
    .min(4, { message: "رمز عبور حداقل باید 4  کاراکتر باشد" })
    .max(32, { message: "رمز عبور نمیتواند بیشتر از ۳۲ کاراکتر باشد" })
    .regex(/^[^\s]+$/, { message: "رمز عبور نباید فاصله داشته باشد" }),
});
export type LoginType = z.infer<typeof LoginFormSchema>;
export type LoginFormState = FormState<LoginType>;

export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "نام باید حداقل شامل دو کاراکتر باشد" })
    .max(10, { message: "حداکثر تعدا کارکتر نام 10 عدد میباشد" })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "نام باید حداقل شامل دو کاراکتر باشد" })
    .max(10, { message: "حداکثر تعدا کارکتر نام 10 عدد میباشد" })
    .trim(),
  email: z
    .string()
    .min(1, { message: "ایمیل الزامی است" })
    .email({ message: "فرمت ایمیل معتبر نیست" })
    .trim(),
  phoneNumber: z
    .string()
    .min(11, { message: "شماره موبایل الزامی است" })
    .max(11)
    .trim(),
  password: z
    .string()
    .min(4, { message: "رمز عبور نمیتواند کمتر از 4 عدد باشد" })
    .max(32, { message: "رمز عبور نمیتواند بیشتر از 32 عدد باشد" })
    .regex(/^[^\s]+$/, { message: "رمز عبور نباید فاصله داشته باشد" })
    .regex(/[a-z]/, {
      message: "رمز عبور باید حداقل یک حرف کوچک انگلیسی داشته باشد",
    })
    .regex(/[A-Z]/, {
      message: "رمز عبور باید حداقل یک حرف بزرگ انگلیسی داشته باشد",
    }),
});

export type RegisterType = z.infer<typeof RegisterFormSchema>;
export type RegisterFormState = FormState<RegisterType>;
