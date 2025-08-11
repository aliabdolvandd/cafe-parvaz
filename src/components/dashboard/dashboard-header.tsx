"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardHeader() {
  const pathName = usePathname();

  return (
    <header className="flex items-center h-14 border-b border-b-gray-800 px-4 lg:px-6 bg-white/60 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <SidebarTrigger className="-ml-1" />

      <Separator orientation="vertical" className="mx-2 h-6" />

      <h1 className="text-lg font-semibold text-gray-600">
        ادمین پنل کافه پرواز
      </h1>

      <div className="flex-1" />

      <Breadcrumb dir="ltr">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`${pathName}`}>{pathName.split("/").pop()}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator /> */}
          {/* <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
