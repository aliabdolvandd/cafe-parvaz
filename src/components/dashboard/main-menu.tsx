import Image from "next/image";
import MenuItems from "./menu-items";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

export default function MainMenu() {
  return (
    <div className="overflow-auto p-4 bg-adminDrawerBg flex flex-col">
      <div className="mx-auto border-b border-b-black pb-4">
        <Image src="/logo.png" alt="logo" height={70} width={130} />
      </div>
      <div className="py-4 grow">
        <MenuItems href="/dashboard/products">محصولات</MenuItems>
        <MenuItems href="/dashboard/orders">سفارشات</MenuItems>
        <MenuItems href="/dashboard/comments">نظرات</MenuItems>
        <MenuItems href="/dashboard/discounts">تخفیفات</MenuItems>
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-gray-400 text-sm">AJ</AvatarFallback>
        </Avatar>
        <Link href="/" className="text-red-600 hover:underline ">
          خروج از حساب کاربری
        </Link>
      </div>
    </div>
  );
}
