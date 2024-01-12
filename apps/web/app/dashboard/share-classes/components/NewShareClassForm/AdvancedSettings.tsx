import { Fragment } from "react";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

import Tile from "@/components/ui/Tile";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import TextField from "./TextField";
import { newShareClassFormSchema } from "./index";

const AdvancedSettings = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof newShareClassFormSchema>>;
}) => {
  const watchHasVotingRights = form.watch("hasVotingRights");

  return (
    <Tile>
      <h3 className="text-lg font-semibold">3. Voting Rights</h3>
      <p className="text-xs text-zinc-600">
        Certificates and Advanced Settings are coming soon...
      </p>

      <FormField
        control={form.control}
        name="hasVotingRights"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="mt-4">Enable Voting Rights</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
      {watchHasVotingRights ? (
        <Fragment>
          <TextField
            control={form.control}
            label="Voting Multiplier"
            name="votingMultiplier"
            type="number"
          />
          <FormField
            control={form.control}
            name="votingComment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Fragment>
      ) : null}
    </Tile>
  );
};

export default AdvancedSettings;
