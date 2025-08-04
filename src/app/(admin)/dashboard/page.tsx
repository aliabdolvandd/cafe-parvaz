import Employees from "@/components/dashboard/employees-stats";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";

export default function dashboard() {
  return (
    <div>
      <Tabs dir="rtl">
        <TabsList className="mb-4">
          <TabsTrigger value="Sales statistics">آمار فروش</TabsTrigger>
          <TabsTrigger value="teams statistics"> فروش تیم</TabsTrigger>
        </TabsList>
        <TabsContent value="Sales statistics">امار فروش</TabsContent>
        <TabsContent value="teams statistics">
          <Employees />
        </TabsContent>
      </Tabs>
    </div>
  );
}
