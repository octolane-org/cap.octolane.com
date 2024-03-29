"use client";

import { createContext, useContext } from "react";
import { UseFormReturn, useForm } from "react-hook-form";

import { NewOptionsFormValues } from "../schema";

type NewCapTableContextType = {
  addOptionForm?: UseFormReturn<NewOptionsFormValues>;
};

export const NewCapTableContext = createContext<NewCapTableContextType>({});

export const useNewCapTableContext = () => useContext(NewCapTableContext);

export const NewCapTableProvider: React.FCC = ({ children }) => {
  const addOptionForm = useForm<NewOptionsFormValues>({
    defaultValues: {
      signedDocuments: [],
      isEarlyExercise: false,

      stakeholderId: "",
      quantity: 0,
      exercisePrice: 0.0001,
      issuedOn: new Date(),
      includeVesting: "No Vesting",
      grantType: "ISO",

      // Review Pre-filled Details
      equityPlanId: "eq-1",
      federalExemption: "Rule 701",
      stateExemption: "",
      expirationDate: null,
      currency: "USD",
      certificatePrefix: "OPT",
      certificateNumber: 1,
    },
  });

  return (
    <NewCapTableContext.Provider value={{ addOptionForm }}>
      {children}
    </NewCapTableContext.Provider>
  );
};
