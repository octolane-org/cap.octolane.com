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

const EquityRetired = ({
  control,
}: {
  control: Control<z.infer<typeof newEquityPlanFormSchema>>;
}) => {
  return (
    <FormField
      control={control}
      name="equityRetired"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Equity Retired</FormLabel>
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

export default EquityRetired;
