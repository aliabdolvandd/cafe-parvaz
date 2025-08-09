"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathName = usePathname();

  return (
    <header className="flex items-center h-12 border-b px-4 lg:px-6 transition-all ease-linear">
      <SidebarTrigger className="-ml-1" />

      <Separator orientation="vertical" className="mx-2 h-6" />

      <h1 className="text-base font-medium">ادمین پنل کافه پرواز</h1>

      <div className="flex-1" />

      <Breadcrumb>
        <BreadcrumbList className="flex items-center gap-1 text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard"></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <SlashIcon className="w-4 h-4" />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <span className="text-gray-500 truncate max-w-xs">{pathName}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
