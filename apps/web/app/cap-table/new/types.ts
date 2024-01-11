import { NewOptionsFormValues } from "./schema";

export type NewOptionsFormFieldType = {
  label: string;
  name: keyof NewOptionsFormValues;
};
