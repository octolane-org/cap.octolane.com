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

import { newShareClassFormSchema } from "./index";

const TextField = ({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
}: {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name: keyof z.infer<typeof newShareClassFormSchema>;
  control: Control<z.infer<typeof newShareClassFormSchema>>;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
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
  );
};

export default TextField;
