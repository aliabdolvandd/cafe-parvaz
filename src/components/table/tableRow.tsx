"use client";

import { Fragment, ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import AISubTable from "./subTable";

type Props<
  T extends { id: string },
  G extends { id?: string; _id?: string }
> = {
  schema: {
    title: string;
    render: (row: T) => ReactNode;
  }[];
  data: T;
  actions?: (row: T) => ReactNode;
  subTable?: {
    header: string;
    schema: {
      title: string;
      render: (row: G) => ReactNode;
    }[];
    key: keyof T;
  };
};

export default function AITableRow<
  T extends { id: string },
  G extends { id?: string; _id?: string }
>({ schema, data, subTable, actions }: Props<T, G>) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow>
        {subTable && (
          <TableCell className="w-12 text-center">
            <button
              aria-label="expand row"
              onClick={() => setOpen(!open)}
              className="p-1 rounded hover:bg-muted transition"
            >
              {open ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </TableCell>
        )}

        {schema.map((item) => (
          <TableCell key={data.id + item.title} className="text-right">
            {item.render(data)}
          </TableCell>
        ))}

        {actions && (
          <TableCell className="text-center">{actions(data)}</TableCell>
        )}
      </TableRow>

      {subTable && (
        <AISubTable
          colSpan={schema.length + (actions ? 2 : 1)}
          header={subTable.header}
          data={data[subTable.key] as G[]}
          open={open}
          subTitleSchema={subTable.schema}
        />
      )}
    </Fragment>
  );
}
