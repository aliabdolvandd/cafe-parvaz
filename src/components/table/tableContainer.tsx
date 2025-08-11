import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableLoading from "./tableLoading";

export type TableContainerProps = {
  pageTitle: string;
  title: string;
  createLink?: string;
  children: ReactNode;
};

export function TableContainer({
  pageTitle,
  title,
  createLink,
  children,
}: TableContainerProps) {
  return (
    <Card className="mt-6 border-none h-full overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{pageTitle}</CardTitle>
        {createLink && (
          <Button asChild variant="default" size="sm">
            <Link href={createLink}>{title}</Link>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <Suspense fallback={<TableLoading colCount={6} />}>{children}</Suspense>
      </CardContent>
    </Card>
  );
}
