import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Props = {
  colCount: number;
};

export default async function TableLoading({ colCount }: Props) {
  const array = new Array(colCount).fill(0);
  return (
    <Table>
      <TableBody>
        <TableRow>
          {array.map((_, i) => (
            <TableCell key={i} className="min-h-[2.5rem]">
              <Skeleton className="h-6 w-full" />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
