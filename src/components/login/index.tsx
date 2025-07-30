"use client";
import CallIcon from "@/svg/call";
import WaveIcon from "@/svg/Wave";
import Image from "next/image";

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
        <p className="text-gray-400">برای ورود شماره تماس خود را وارد نمایید</p>
        <div className="w-full max-w-sm mx-auto space-y-4 ">
          <label htmlFor="phone" className="self-end text-sm text-black">
            شماره تماس
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="phone"
              maxLength={11}
              className="w-full pr-4 pl-4 py-2 rounded-xl border border-primary text-right focus:outline-none"
            />
            <div className="absolute inset-y-0 left-2 flex items-center">
              <CallIcon />
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold">
            ورود
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <WaveIcon />
      </div>
    </div>
  );
}

export default Login;
