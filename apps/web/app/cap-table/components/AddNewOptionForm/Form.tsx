"use client";

import Tile from "@/components/ui/Tile";
import { Form } from "@/components/ui/form";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormValues } from "../../new/schema";

import SelectField from "./SelectField";
import SwitchField from "./SwitchField";

const AddNewOptionForm = () => {
  const { addOptionForm } = useNewCapTableContext();

  if (!addOptionForm) {
    return null; // or your fallback UI
  }

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
      </form>
    </Form>
  );
};

export default AddNewOptionForm;
