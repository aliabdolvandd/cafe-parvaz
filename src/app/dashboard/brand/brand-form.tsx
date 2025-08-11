"use client";

import CreateBrandAction from "@/action/brand";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BrandSchema, BrandType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function BrandForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<BrandType>({
    resolver: zodResolver(BrandSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });
  const onSubmit = async (data: BrandType) => {
    const result = await CreateBrandAction(data);
    if (!result.success) {
      setServerError(result.message ?? null);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto space-y-6"
        >
          {serverError && (
            <Alert>
              <TriangleIcon className="h-4 w-4" />
              <AlertTitle>خطا!</AlertTitle>
              <AlertDescription className="text-red-500 text-sm text-center">
                {serverError}
              </AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit"> ساخت</Button>
        </form>
      </Form>
    </div>
  );
}
