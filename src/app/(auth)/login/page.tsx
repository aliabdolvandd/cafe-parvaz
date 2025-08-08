import LoginForm from "@/components/form/loginForm";
import WaveIcon from "@/svg/Wave";
import Image from "next/image";

export default function LoginPge() {
  return (
    <div className=" flex-1 h-screen justify-center flex-col bg-background overflow-hidden">
      <div className="flex sm:justify-between  w-full sm:px-20 pt-8 px-4 ">
        <div className="flex justify-center w-full sm:justify-start sm:w-auto">
          <Image src="/logo.png" alt="Logo" width={147} height={51} />
        </div>

        <div>
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
      <LoginForm />
      <div className="fixed bottom-0 w-full">
        <WaveIcon />
      </div>
    </div>
  );
}
