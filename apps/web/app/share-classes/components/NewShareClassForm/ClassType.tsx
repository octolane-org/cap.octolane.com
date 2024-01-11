import { Control } from "react-hook-form";
import * as z from "zod";

import Tile from "@/components/ui/Tile";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

import { newShareClassFormSchema } from ".";

const ClassType = ({
  control,
}: {
  control: Control<z.infer<typeof newShareClassFormSchema>>;
}) => {
  return (
    <Tile>
      <h3 className="text-lg font-semibold">1. Select Class Type</h3>
      <FormField
        control={control}
        name="classType"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Share Class Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-6"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Common" />
                  </FormControl>
                  <FormLabel className="font-normal">Common</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Preferred" />
                  </FormControl>
                  <FormLabel className="font-normal">Preferred</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
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
