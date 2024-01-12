import { Control } from "react-hook-form";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { newShareClassFormSchema } from "./index";

type Props = {
  label: string;
  name: keyof z.infer<typeof newShareClassFormSchema>;
  control: Control<z.infer<typeof newShareClassFormSchema>>;
  options: Array<{
    label: string;
    value: string;
  }>;
};

const RadioGroupField = ({ control, label, name, options }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value as string}
              className="flex gap-6"
            >
              {options.map(option => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={option.value}
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RadioGroupField;
