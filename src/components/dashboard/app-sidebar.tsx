"use client";

import { BoxIcon, Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import UserSection from "./user-section";

const items = [
  {
    title: "داشبورد",
    url: "/dashboard",
    icon: BoxIcon,
  },
  {
    title: "شهر ها",
    url: "/dashboard/city",
    icon: Home,
  },
  {
    title: "برند",
    url: "/dashboard/brand",
    icon: Inbox,
  },
  {
    title: "کتگوری",
    url: "/dashboard/category",
    icon: Calendar,
  },
  {
    title: "محصولات",
    url: "/dashboard/products",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const data = {
  user: {
    name: "مراد",
    email: "m@example.com",
    avatar: "/vector.png",
  },
};

export function AppSidebar() {
  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader className="items-center">
        <Image src="/logo.png" alt="logo" width={100} height={60} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>مدیریت سایت</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} className="mt-2">
                    <SidebarMenuButton asChild className=" p-5">
                      <Link href={item.url}>
                        <item.icon />
                        <span className="">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserSection user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
