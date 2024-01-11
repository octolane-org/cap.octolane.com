"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import DateField from "./DateField";
import EquityRetired from "./EquityRetired";
import InitialPlanSize from "./InitialPlanSize";
import ShareClassSelect from "./ShareClassSelect";
import TermsOfPlan from "./TermsOfPlan";

export const newEquityPlanFormSchema = z.object({
  name: z.string().min(2).max(50),
  shareClass: z.string(),
  initialPlanSize: z.number().min(1).max(1000000000),
  termsOfYears: z.number().min(1).max(100),
  equityRetired: z.number().min(1).max(1000000000),
  boardApprovalDate: z.date(),
  stockholderApprovalDate: z.date(),
  purchasePeriod: z.number(),
  purchasePeriodType: z.enum(["days", "months", "years"]),
  comments: z.string(),
  documents: z.array(z.string()),

  // Post termination exercise period
  voluntaryTermination: z.number(),
  voluntaryTerminationType: z.enum(["days", "months", "years"]),

  involuntaryTermination: z.number(),
  involuntaryTerminationType: z.enum(["days", "months", "years"]),

  terminationWithCause: z.number(),
  terminationWithCauseType: z.enum(["days", "months", "years"]),

  death: z.number(),
  deathType: z.enum(["days", "months", "years"]),

  disability: z.number(),
  disabilityType: z.enum(["days", "months", "years"]),

  retirement: z.number(),
  retirementType: z.enum(["days", "months", "years"]),
});

const NewEquityPlanForm = () => {
  const form = useForm<z.infer<typeof newEquityPlanFormSchema>>({
    resolver: zodResolver(newEquityPlanFormSchema),
    defaultValues: {
      name: "",
      shareClass: "Common",
      initialPlanSize: 0,
      termsOfYears: 10,
      equityRetired: 0,
      boardApprovalDate: new Date(),
      stockholderApprovalDate: new Date(),
      purchasePeriod: 0,
      purchasePeriodType: "days",
      comments: "",
      documents: [],

      // Post termination exercise period
      voluntaryTermination: 0,
      voluntaryTerminationType: "days",

      involuntaryTermination: 0,
      involuntaryTerminationType: "days",

      terminationWithCause: 0,
      terminationWithCauseType: "days",

      death: 0,
      deathType: "days",

      disability: 0,
      disabilityType: "days",

      retirement: 0,
      retirementType: "days",
    },
  });

  function onSubmit(values: z.infer<typeof newEquityPlanFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equity Plan Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ShareClassSelect control={form.control} />
        <InitialPlanSize control={form.control} />
        <TermsOfPlan control={form.control} />
        <EquityRetired control={form.control} />
        <DateField
          control={form.control}
          name="boardApprovalDate"
          label="Board Approval Date"
        />
        <DateField
          control={form.control}
          name="stockholderApprovalDate"
          label="Stockholder Approval Date"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewEquityPlanForm;
