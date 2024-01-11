import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormFieldType } from "../../new/types";

const TextField = ({
  name,
  label,
  className,
  placeholder = "",
  inputType = "text",
}: NewOptionsFormFieldType) => {
  const { addOptionForm } = useNewCapTableContext();

  return (
    <FormField
      control={addOptionForm?.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={inputType}
              value={field.value as string}
              onChange={e => {
                const isNumber = inputType === "number";
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
