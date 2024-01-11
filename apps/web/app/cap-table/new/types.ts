import { NewOptionsFormValues } from "./schema";

export type NewOptionsFormFieldType = {
  label: string;
  placeholder?: string;
  inputType?: string;
  name: keyof NewOptionsFormValues;
  selectOptions?: Array<{ label: string; value: string }>;
};
