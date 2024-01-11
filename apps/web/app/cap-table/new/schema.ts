import * as z from "zod";

export const newOptionsFormSchema = z.object({
  // Attach Signed Option Grants
  signedDocuments: z.array(z.string()),
  isEarlyExercise: z.boolean(),

  stakeholderId: z.string().min(1),
  quantity: z.number().min(1),
  exercisePrice: z.number().min(0.0001),
  issuedOn: z.date(),
  includeVesting: z.enum(["No Vesting", "Vesting", "Multi-Tranche Vesting"]),
  grantType: z.enum(["ISO", "NSO", "INTL", "EMI"]),

  // Review Pre-filled Details
  equityPlanId: z.string().min(1),
  federalExemption: z.enum([
    "Rule 701",
    "Rule 4(a)(2)",
    "Reg D - 506(b)",
    "Reg D - 506(c)",
    "Reg S",
    "Non US",
    "Other",
  ]),
  stateExemption: z.string(),
  expirationDate: z.date().nullable(),
  currency: z.string().min(1),
  certificatePrefix: z.string().min(1),
  certificateNumber: z.number(),
});

export type NewOptionsFormValues = z.infer<typeof newOptionsFormSchema>;
