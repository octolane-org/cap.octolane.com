"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const DownloadCaptable = () => {
  const downloadCapTable = () => {
    toast.info("Downloading cap table in progress...");
  };

  return (
    <Button variant="outline" onClick={downloadCapTable}>
      Download Cap Table
    </Button>
  );
};

export default DownloadCaptable;
