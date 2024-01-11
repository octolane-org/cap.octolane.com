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

import { newEquityPlanFormSchema } from "./index";

const InitialPlanSize = ({
  control,
}: {
  control: Control<z.infer<typeof newEquityPlanFormSchema>>;
}) => {
  return (
    <FormField
      control={control}
      name="initialPlanSize"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Initial Plan Size (Shares)</FormLabel>
          <FormControl>
            <Input
              placeholder=""
              {...field}
              type="number"
              onChange={e => field.onChange(Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InitialPlanSize;
