import { HTMLInputTypeAttribute } from "react";

import { NewOptionsFormValues } from "./schema";

export type NewOptionsFormFieldType = {
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  name: keyof NewOptionsFormValues;
  selectOptions?: Array<{ label: string; value: string }>;
};
