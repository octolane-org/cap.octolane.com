import { Control } from "react-hook-form";
import * as z from "zod";

import Tile from "@/components/ui/Tile";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import { newShareClassFormSchema } from ".";
import RadioGroupField from "./RadioGroupField";

const ClassType = ({
  control,
}: {
  control: Control<z.infer<typeof newShareClassFormSchema>>;
}) => {
  return (
    <Tile>
      <h3 className="text-lg font-semibold">1. Select Class Type</h3>
      <RadioGroupField
        control={control}
        label="Share Class Type"
        name="classType"
        options={[
          {
            value: "Common",
            label: "Common",
          },
          {
            value: "Preferred",
            label: "Preferred",
          },
        ]}
      />

      <FormField
        control={control}
        name="excludeFromDilution"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="mt-4">Exclude from Fully Diluted</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </Tile>
  );
};

export default ClassType;
