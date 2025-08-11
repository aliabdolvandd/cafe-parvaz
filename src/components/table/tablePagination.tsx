"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  count: number;
};

const rowsPerPageOptions = [5, 10, 25];

export default function TablePagination({ count }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const page = parseInt(searchParams.get("page") || "1", 10);

  const totalPages = Math.ceil(count / pageSize);

  const createQueryString = useCallback(
    (newParams: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newParams).forEach(([key, value]) => {
        params.set(key, value);
      });
      return params.toString();
    },
    [searchParams]
  );

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    router.push(
      pathname + "?" + createQueryString({ page: newPage.toString() })
    );
  };

  const changePageSize = (newPageSize: number) => {
    router.push(
      pathname +
        "?" +
        createQueryString({ pageSize: newPageSize.toString(), page: "1" })
    );
  };

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="text-sm text-gray-700 dark:text-gray-300">
        نمایش {(page - 1) * pageSize + 1} تا {Math.min(page * pageSize, count)}{" "}
        از {count} آیتم
      </div>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          تعداد در هر صفحه:
        </span>
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => changePageSize(parseInt(value, 10))}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {rowsPerPageOptions.map((opt) => (
              <SelectItem key={opt} value={opt.toString()}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          disabled={page <= 1}
          onClick={() => goToPage(page - 1)}
          aria-label="صفحه قبلی"
        >
          قبلی
        </Button>

        <Button
          variant="outline"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => goToPage(page + 1)}
          aria-label="صفحه بعدی"
        >
          بعدی
        </Button>
      </div>
    </div>
  );
}
