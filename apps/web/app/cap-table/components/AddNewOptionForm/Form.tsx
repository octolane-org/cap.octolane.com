"use client";

import { Form } from "@/components/ui/form";

import { useNewCapTableContext } from "../../new/context/new-cap-table";
import { NewOptionsFormValues } from "../../new/schema";

import SignedSection from "./SignedSection";

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
        <SignedSection />
      </form>
    </Form>
  );
};

export default AddNewOptionForm;
