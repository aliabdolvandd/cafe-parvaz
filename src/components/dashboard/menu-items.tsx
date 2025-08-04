"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";

type props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItems({ children, href }: props) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        "block p-2 hover:bg-adminDrawerHoverBg rounded-xl text-TXT",
        isActive &&
          "bg-adminDrawerActiveBorder hover:bg-adminDrawerActiveBorder"
      )}
    >
      {children}
    </Link>
  );
}
