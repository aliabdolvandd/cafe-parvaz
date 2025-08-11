import { AppSidebar } from "@/components/dashboard/app-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/authProvider";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full overflow-hidden">
          <DashboardHeader />
          {children}
        </main>
      </SidebarProvider>
    </AuthProvider>
  );
}
