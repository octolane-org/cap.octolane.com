"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { configuration } from "@/core/constants/configs";

import Tile from "@/components/ui/Tile";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormValues } from "../../new/schema";

import DateField from "./DateField";
import RadioGroupField from "./RadioGroupField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import TextField from "./TextField";

const AddNewOptionForm = () => {
  const router = useRouter();
  const { addOptionForm } = useNewCapTableContext();

  if (!addOptionForm) {
    return null; // or your fallback UI
  }

  const quantity = addOptionForm.watch("quantity");
  const exercisePrice = addOptionForm.watch("exercisePrice");

  function onSubmit(values: NewOptionsFormValues) {
    toast.success("Share Class Created!");
    router.push(configuration.paths.capTables.all);
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

        <Tile>
          <h3 className="text-lg font-semibold">
            4. Review Pre-filled Details
          </h3>
          <SelectField
            label="Equity Plan"
            name="equityPlanId"
            selectOptions={[
              {
                label: "EQ-1",
                value: "eq-1",
              },
            ]}
          />
          <SelectField
            label="Federal Exemption"
            name="equityPlanId"
            selectOptions={[
              {
                label: "Rule 701",
                value: "Rule 701",
              },
              {
                label: "Rule 4(a)(2)",
                value: "Rule 4(a)(2)",
              },
              {
                label: "Reg D - 506(b)",
                value: "Reg D - 506(b)",
              },
              {
                label: "Reg D - 506(c)",
                value: "Reg D - 506(c)",
              },
              {
                label: "Reg S",
                value: "Reg S",
              },
              {
                label: "Non US",
                value: "Non US",
              },
              {
                label: "Other",
                value: "Other",
              },
            ]}
          />
          <FormField
            control={addOptionForm?.control}
            name="stateExemption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State Exemption</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DateField label="Expiration Date" name="expirationDate" />
          <SelectField
            label="Currency"
            name="currency"
            selectOptions={[
              {
                label: "USD ($)",
                value: "USD",
              },
              {
                label: "CAD ($)",
                value: "CAD",
              },
              {
                label: "Euro (€)",
                value: "Euro",
              },
            ]}
          />
          <div className="flex gap-2">
            <TextField
              className="grow"
              label="Prefix"
              name="certificatePrefix"
            />
            <TextField
              className="grow"
              label="Certificate ID"
              name="certificateNumber"
            />
          </div>
        </Tile>

        <div className="flex justify-end">
          <Button type="submit" className="w-full max-w-xs">
            Save and Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddNewOptionForm;
