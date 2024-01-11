"use client";

import Tile from "@/components/ui/Tile";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormValues } from "../../new/schema";

import DateField from "./DateField";
import RadioGroupField from "./RadioGroupField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import TextField from "./TextField";

const AddNewOptionForm = () => {
  const { addOptionForm } = useNewCapTableContext();

  if (!addOptionForm) {
    return null; // or your fallback UI
  }

  const quantity = addOptionForm.watch("quantity");
  const exercisePrice = addOptionForm.watch("exercisePrice");

  function onSubmit(values: NewOptionsFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...addOptionForm}>
      <form
        onSubmit={addOptionForm?.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <Tile>
          <h3 className="text-lg font-semibold">1. Select Class Type</h3>
          <SwitchField label="Early Exercise" name="isEarlyExercise" />
        </Tile>

        <Tile>
          <h3 className="text-lg font-semibold">
            2. Add Stakeholder Information
          </h3>
          <SelectField
            label="Stakeholder Name"
            name="stakeholderId"
            selectOptions={[
              {
                label: "John Doe (john@example.com)",
                value: "john-doe",
              },
              {
                label: "Jane Doe (jane@example.com)",
                value: "jane-doe",
              },
            ]}
          />
        </Tile>

        <Tile>
          <h3 className="text-lg font-semibold">3. Fill Out Information</h3>
          <TextField
            inputType="number"
            label="Quantity (Options)"
            name="quantity"
          />
          <TextField
            inputType="number"
            label="Exercise Price ($)"
            name="exercisePrice"
          />
          <FormItem>
            <FormLabel>Cost to Exercise ($)</FormLabel>
            <Input
              value={
                quantity && exercisePrice
                  ? (quantity * exercisePrice).toFixed(2)
                  : 0
              }
              disabled
            />
          </FormItem>
          <DateField label="Issued On" name="issuedOn" />
          <RadioGroupField label="Includes Vesting" name="includeVesting" />
          <SelectField
            label="Option Grant Type"
            name="grantType"
            selectOptions={[
              {
                label: "ISO (Incentive Stock Option)",
                value: "ISO",
              },
              {
                label: "NSO (Non-Qualified Stock Option)",
                value: "NSO",
              },
              {
                label: "INTL (International)",
                value: "INTL",
              },
              {
                label: "EMI (Enterprise Management Incentive)",
                value: "EMI",
              },
            ]}
          />
        </Tile>
      </form>
    </Form>
  );
};

export default AddNewOptionForm;
