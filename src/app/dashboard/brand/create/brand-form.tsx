"use client";
import CreateBrandAction from "@/action/brand";
import AIForm from "@/components/form/AIForm";
import { Form } from "@/components/ui/form";
import { BrandSchema, BrandType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BrandForm() {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<BrandType>({
    resolver: zodResolver(BrandSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });
  const onSubmit = async (data: BrandType) => {
    const res = await CreateBrandAction(data);
    if (!res.success) {
      setError(res.message ?? null);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AIForm
          schema={[
            {
              name: "name",
              label: "نام برند",
              type: "string",
              error: !!error,
            },
          ]}
        />
      </form>
    </Form>
  );
}
