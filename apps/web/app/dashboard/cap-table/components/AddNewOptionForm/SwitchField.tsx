import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormFieldType } from "../../new/types";

const SwitchField = ({ name, label }: NewOptionsFormFieldType) => {
  const { addOptionForm } = useNewCapTableContext();

  return (
    <FormField
      control={addOptionForm?.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="mt-4">{label}</FormLabel>
          <FormControl>
            <Switch
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SwitchField;
