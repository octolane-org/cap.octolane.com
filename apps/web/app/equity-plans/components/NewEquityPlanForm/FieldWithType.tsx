import { HTMLInputTypeAttribute } from "react";
import { Control } from "react-hook-form";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { newEquityPlanFormSchema } from "./index";

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  nameOfValue: keyof z.infer<typeof newEquityPlanFormSchema>;
  nameOfValueType: keyof z.infer<typeof newEquityPlanFormSchema>;
  control: Control<z.infer<typeof newEquityPlanFormSchema>>;
  typeOptions: Array<{
    label: string;
    value: string;
  }>;
};

const FieldWithType = ({
  label,
  control,
  type = "text",
  nameOfValue,
  nameOfValueType,
  typeOptions,
}: Props) => {
  return (
    <div className="flex flex-col items-start">
      <FormLabel>{label}</FormLabel>
      <div className="flex w-full items-start gap-2 mt-2">
        <FormField
          control={control}
          name={nameOfValue}
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input
                  {...field}
                  type={type}
                  value={field.value as string}
                  onChange={e => {
                    const isNumber = type === "number";
                    const value = isNumber
                      ? Number(e.target.value)
                      : e.target.value;
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={nameOfValueType}
          render={({ field }) => (
            <FormItem className="flex-grow">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value as string}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {typeOptions.map(option => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default FieldWithType;
