"use client";

import AITable from "@/components/table/ATable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { IBrand } from "@/types/type";
import Link from "next/link";
import { use } from "react";

export default function BrandsTable({ brands }: { brands: Promise<IBrand[]> }) {
  const brandList = use(brands);
  return (
    <>
      <Card className="border-none">
        <AITable
          actions={() => (
            <div className="flex space-x-2 gap-2">
              <Tooltip>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary text-xs"
                >
                  <Link href="#">ویرایش</Link>
                </Button>
              </Tooltip>
              <Tooltip>
                <Button
                  asChild
                  variant="outline"
                  className="text-red-500 text-xs"
                >
                  <Link href="#">حذف</Link>
                </Button>
              </Tooltip>
            </div>
          )}
          data={brandList}
          schema={[
            {
              title: "نام برند",
              render: (row) => row.name,
            },
            {
              title: "توضیحات",
              render: (row) =>
                !row.description || row.description.length === 0
                  ? "----------"
                  : row.description,
            },
            {
              title: "وضعیت",
              render: (row) =>
                row.isActive && row.isActive === true ? "فعال" : "غیر فعال",
            },
          ]}
        />
      </Card>
    </>
  );
}
