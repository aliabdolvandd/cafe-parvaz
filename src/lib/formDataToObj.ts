import { set } from "lodash";
import "server-only";

export default function formDataToObject<T extends Record<string, unknown>>(
  formData: FormData
): T {
  const obj: T = {} as T;

  for (const [key, value] of formData.entries()) {
    set(obj, key, value);
  }
  return obj;
}
