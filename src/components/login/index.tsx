"use client";
import WaveIcon from "@/svg/Wave";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Login() {
  return (
    <div className=" flex-1 h-screen justify-center flex-col bg-background overflow-hidden">
      <div className="flex sm:justify-between  w-full sm:px-20 pt-8 px-4 ">
        <div className="flex justify-center w-full sm:justify-start sm:w-auto">
          <Image src="/logo.png" alt="Logo" width={147} height={51} />
        </div>

        <div className=" ">
          <div className="hidden md:flex items-center justify-center flex-row-reverse gap-2 ">
            <div className="w-[40px] h-[40px] bg-secondary rounded-full flex items-center justify-center">
              <Image src="/vector.png" alt="coffee" width={20} height={20} />
            </div>
            <div className="flex flex-col items-end">
              <p className="text-primary text-[22px] ">021 -</p>
              <p className="text-[18px]">123456789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-36 sm:pt-14 py-4">
        <div className="w-[80px] h-[80px] bg-secondary rounded-full flex items-center justify-center">
          <Image src="/vector.png" alt="coffee" width={42} height={40} />
        </div>
        <p className="text-[30px] font-bold p-1">ورود / ثبت نام </p>
        <p className="text-gray-400">برای ورود ایمیل خود را وارد نمایید</p>
        <form className="w-full" action="">
          <div className=" max-w-sm mx-auto space-y-6">
            <div className="relative w-full">
              <Input
                type="text"
                id="email"
                // placeholder=""
                className="peer w-full pr-10 pl-4 pt-4 pb-2 rounded-xl border border-primary text-right focus:outline-none"
              />
              {/* <Label
                htmlFor="email"
                className="absolute right-4 top-2 text-xs text-muted-foreground transition-all bg-background px-1
            peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
              >
                ایمیل
              </Label> */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <MailIcon className="text-primary h-5 w-5" />
              </div>
            </div>

            <div className="relative w-full">
              <Input
                type="password"
                id="password"
                placeholder=""
                className="peer w-full pr-4 pl-4 pt-4 pb-2 rounded-xl border border-primary text-right focus:outline-none"
              />
              <Label
                htmlFor="password"
                className="absolute right-4 top-2 text-sm text-muted-foreground transition-all bg-background px-1
            peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
              >
                رمز عبور
              </Label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 w-full">
        <WaveIcon />
      </div>
    </div>
  );
}

export default Login;
