import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormFieldType } from "../../new/types";

const RadioGroupField = ({
  label,
  name,
  selectOptions,
}: NewOptionsFormFieldType) => {
  const { addOptionForm } = useNewCapTableContext();

  return (
    <FormField
      control={addOptionForm?.control}
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
              {selectOptions?.map(option => (
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
