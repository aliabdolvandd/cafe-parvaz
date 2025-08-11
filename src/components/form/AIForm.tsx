// "use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import SingleUpload from "../upload";

type FormField = {
  type: "string" | "number" | "image" | "email" | "text";
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: unknown;
  error?: boolean;
  helperText?: React.ReactNode;
  size?: number;
};

type AIFormProps = {
  schema: FormField[];
};

export default function AIForm({ schema }: AIFormProps) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {schema.map((item) => (
        <div
          key={item.name}
          className={cn(
            "col-span-12",
            item.size ? `sm:col-span-${item.size}` : "sm:col-span-12"
          )}
        >
          {item.type === "image" ? (
            <div className="space-y-2">
              {item.label && <Label>{item.label}</Label>}
              <SingleUpload
                name={item.name}
                defaultValue={item.defaultValue as string}
              />
              {item.helperText && (
                <p className="text-sm text-muted-foreground">
                  {item.helperText}
                </p>
              )}
            </div>
          ) : item.type === "text" ? (
            <div className="space-y-2">
              {item.label && <Label>{item.label}</Label>}
              <Textarea
                name={item.name}
                placeholder={item.placeholder}
                defaultValue={item.defaultValue as string}
                className={cn(item.error && "border-red-500")}
              />
              {item.helperText && (
                <p
                  className={cn(
                    "text-sm",
                    item.error ? "text-red-500" : "text-muted-foreground"
                  )}
                >
                  {item.helperText}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {item.label && <Label>{item.label}</Label>}
              <Input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                defaultValue={item.defaultValue as string}
                className={cn(item.error && "border-red-500")}
              />
              {item.helperText && (
                <p
                  className={cn(
                    "text-sm",
                    item.error ? "text-red-500" : "text-muted-foreground"
                  )}
                >
                  {item.helperText}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
