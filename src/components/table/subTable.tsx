import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props<T extends { id?: string; _id?: string }> = {
  open: boolean;
  header: string;
  data: T[];
  colSpan: number;
  subTitleSchema: {
    title: string;
    render: (row: T) => ReactNode;
  }[];
};

export default function AISubTable<T extends { id?: string; _id?: string }>({
  open,
  header,
  data,
  subTitleSchema,
  colSpan,
}: Props<T>) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="p-0">
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="m-4">
            <h3 className="text-lg font-semibold mb-3">{header}</h3>
            <Table className="text-right">
              <TableHeader>
                <TableRow>
                  {subTitleSchema.map((item) => (
                    <TableCell key={item.title}>{item.title}</TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={subTitleSchema.length}
                      className="text-center py-6"
                    >
                      اینجا چیزی نیست
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((row) => (
                    <TableRow
                      key={row._id || row.id}
                      className="hover:bg-muted"
                    >
                      {subTitleSchema.map((item) => (
                        <TableCell key={(row._id || row.id) + item.title}>
                          {item.render(row)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
