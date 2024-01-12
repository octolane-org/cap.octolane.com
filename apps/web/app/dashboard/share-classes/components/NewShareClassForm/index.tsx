"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { configuration } from "@/core/constants/configs";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import AdvancedSettings from "./AdvancedSettings";
import ClassType from "./ClassType";
import Information from "./Information";

export const newShareClassFormSchema = z.object({
  // Class Type
  classType: z.enum(["Common", "Preferred"]),
  excludeFromDilution: z.boolean(),
  documents: z.array(z.string()),

  // Share Class Information
  name: z.string().min(1),
  prefix: z.string(),
  authorizedShares: z.number(),
  pricePerShare: z.number(),
  parValue: z.number(),
  stockholderApprovalDate: z.date(),
  boardApprovalDate: z.date(),
  dividends: z.enum(["Cumulative", "Non-Cumulative"]),

  // Voting Rights, [Future => Certificate and Advanced Settings]
  hasVotingRights: z.boolean(),
  votingMultiplier: z.number().min(1),
  votingComment: z.string(),
});

const NewEquityPlanForm = () => {
  const router = useRouter();

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
    toast.success("Share Class Created!");
    router.push(configuration.paths.shareClasses.all);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-8">
        <ClassType control={form.control} />
        <Information control={form.control} />
        <AdvancedSettings form={form} />
        <div className="flex justify-end">
          <Button type="submit" className="max-w-xs w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewEquityPlanForm;
