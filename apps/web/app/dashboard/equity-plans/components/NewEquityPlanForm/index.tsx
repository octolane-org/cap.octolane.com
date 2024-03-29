"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { configuration } from "@/core/constants/configs";

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
import { Textarea } from "@/components/ui/textarea";

import DateField from "./DateField";
import EquityRetired from "./EquityRetired";
import FieldWithType from "./FieldWithType";
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

const periodOptions = [
  { label: "Days", value: "days" },
  { label: "Months", value: "months" },
  { label: "Years", value: "years" },
];

const NewEquityPlanForm = () => {
  const router = useRouter();

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
    toast.success("Share Class Created!");
    router.push(configuration.paths.equityPlans.all);
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
        <FieldWithType
          label="Repurchase Period"
          nameOfValue="purchasePeriod"
          nameOfValueType="purchasePeriodType"
          control={form.control}
          type="number"
          typeOptions={periodOptions}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewEquityPlanForm;
