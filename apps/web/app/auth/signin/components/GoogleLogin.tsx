"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function GoogleLogin() {
  return (
    <Button
      onClick={() => {
        try {
          signIn("google");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <FontAwesomeIcon icon={faGoogle} className="text-white h-5 w-5 mr-2" />
      Signin with Google
    </Button>
  );
}
