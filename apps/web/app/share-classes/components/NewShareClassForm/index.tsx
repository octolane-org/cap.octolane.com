"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import ClassType from "./ClassType";

export const newShareClassFormSchema = z.object({
  // Class Type
  classType: z.enum(["Common", "Preferred"]),
  excludeFromDilution: z.boolean(),
  documents: z.array(z.string()),

  // Share Class Information
  name: z.string().min(1),
  prefix: z.string(),
  authorizedShares: z.number().min(1),
  pricePerShare: z.number().min(0),
  parValue: z.number().min(0),
  stockholderApprovalDate: z.date(),
  boardApprovalDate: z.date(),
  dividends: z.enum(["Cumulative", "Non-Cumulative"]),

  // Voting Rights, [Future => Certificate and Advanced Settings]
  hasVotingRights: z.boolean(),
  votingMultiplier: z.number().min(1),
  votingComment: z.string(),
});

const NewEquityPlanForm = () => {
  const form = useForm<z.infer<typeof newShareClassFormSchema>>({
    resolver: zodResolver(newShareClassFormSchema),
    defaultValues: {
      classType: "Common",
      excludeFromDilution: false,
      documents: [],

      // Share Class Information
      name: "",
      prefix: "",
      authorizedShares: 0,
      pricePerShare: 0,
      parValue: 0,
      stockholderApprovalDate: new Date(),
      boardApprovalDate: new Date(),
      dividends: "Cumulative",

      // Voting Rights, [Future => Certificate and Advanced Settings]
      hasVotingRights: false,
      votingMultiplier: 1,
      votingComment: "",
    },
  });

  function onSubmit(values: z.infer<typeof newShareClassFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-8">
        <ClassType control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewEquityPlanForm;
