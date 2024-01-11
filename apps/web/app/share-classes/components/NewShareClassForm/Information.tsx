import { Control } from "react-hook-form";
import * as z from "zod";

import Tile from "@/components/ui/Tile";

import DateField from "./DateField";
import RadioGroupField from "./RadioGroupField";
import TextField from "./TextField";
import { newShareClassFormSchema } from "./index";

const Information = ({
  control,
}: {
  control: Control<z.infer<typeof newShareClassFormSchema>>;
}) => {
  return (
    <Tile>
      <TextField control={control} name="name" label="Share Class Name" />
      <TextField control={control} name="prefix" label="Share Class Prefix" />
      <TextField
        control={control}
        name="authorizedShares"
        label="Authorized Number of Shares"
        type="number"
      />
      <TextField
        control={control}
        name="pricePerShare"
        label="Price per Share ($)"
        type="number"
      />
      <TextField
        control={control}
        name="parValue"
        label="Par Value ($)"
        type="number"
      />
      <DateField
        control={control}
        label="Stockholder Approval Date"
        name="stockholderApprovalDate"
      />
      <DateField
        control={control}
        label="Board Approval Date"
        name="boardApprovalDate"
      />
      <RadioGroupField
        control={control}
        label="Dividends"
        name="dividends"
        options={[
          {
            value: "Cumulative",
            label: "Cumulative",
          },
          {
            value: "Non-Cumulative",
            label: "Non-Cumulative",
          },
        ]}
      />
    </Tile>
  );
};

export default Information;
