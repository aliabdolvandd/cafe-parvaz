"use client";

import React, { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Column } from "@/types/type";
import { TableContainer } from "./tableContainer";
import AITableRow from "./tableRow";
// import TablePagination from "./tablePagination";

interface AITableProps<T extends { id: string }, G extends { id: string }> {
  schema: Column<T>[];
  data: T[];
  subTable?: { header: string; schema: Column<G>[]; key: keyof T };
  actions?: (row: T) => ReactNode;
}

export default function AITable<
  T extends { id: string },
  G extends { id: string }
>({ schema, data, subTable, actions }: AITableProps<T, G>) {
  return (
    <Card className="border-none">
      <TableContainer pageTitle="" title="">
        <Table className="text-right ">
          <TableHeader>
            <TableRow>
              {subTable && <TableHead className="w-12" />}
              {schema.map((item) => (
                <TableHead key={item.title} className="font-medium text-right">
                  {item.title}
                </TableHead>
              ))}
              {actions && (
                <TableHead className="w-24 text-center">عملیات</TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {(!data || data.length === 0) && (
              <TableRow>
                <TableCell
                  colSpan={
                    schema.length + (actions ? 1 : 0) + (subTable ? 1 : 0)
                  }
                  className="text-center py-8 text-gray-500"
                >
                  دیتایی وجود ندارد
                </TableCell>
              </TableRow>
            )}

            {data.map((row) => (
              <AITableRow
                key={row.id}
                schema={schema}
                data={row}
                subTable={subTable}
                actions={actions}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <div className="mt-4 px-4">
        <TablePagination count={data.total} />
      </div> */}
    </Card>
  );
}
