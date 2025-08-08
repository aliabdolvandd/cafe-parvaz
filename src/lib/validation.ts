import { z } from "zod";
import { FormState } from "@/types/type";

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "وارد کردن ایمیل یا نام کاربری الزامی است" })
    .refine(
      (val) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        const isUsername = /^[a-zA-Z0-9._]{3,}$/.test(val); // حداقل ۳ کاراکتر، حروف/اعداد/._ مجاز
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
