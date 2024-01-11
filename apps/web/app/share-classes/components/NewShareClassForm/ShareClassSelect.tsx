import { Control } from "react-hook-form";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { newEquityPlanFormSchema } from "./index";

const ShareClassSelect = ({
  control,
}: {
  control: Control<z.infer<typeof newEquityPlanFormSchema>>;
}) => {
  return (
    <FormField
      control={control}
      name="shareClass"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Share Class</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Common">Common</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShareClassSelect;
