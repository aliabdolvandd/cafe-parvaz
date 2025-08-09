import { ChartAreaInteractive } from "@/components/dashboard/chart-area";
import { DataTable } from "@/components/dashboard/data-table";
import Employees from "@/components/dashboard/employees-stats";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import data from "../../components/dashboard/data.json";

export default function dashboard() {
  return (
    <div className="p-6">
      <Tabs dir="rtl" defaultValue="teams statistics">
        <TabsList className="mb-4">
          <TabsTrigger value="Sales statistics">آمار فروش</TabsTrigger>
          <TabsTrigger value="teams statistics"> فروش تیم</TabsTrigger>
        </TabsList>
        <TabsContent value="Sales statistics" className="space-y-10">
          <ChartAreaInteractive />
          <DataTable data={data} />
        </TabsContent>

        <TabsContent value="teams statistics">
          <Employees />
        </TabsContent>
      </Tabs>
    </div>
  );
}
