import { ServerPageProps } from "@/types/type";
import BrandsTable from "./brand-table";
import { getBrands } from "@/api/brand";
import { TableContainer } from "@/components/table/tableContainer";

export default async function BrandPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const brands = getBrands(params);
  return (
    <TableContainer
      pageTitle=""
      title="ساخت برند جدید"
      createLink="/dashboard/brand/create"
    >
      <BrandsTable brands={brands} />
    </TableContainer>
  );
}
