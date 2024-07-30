"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignOutPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/" });
  }, []);

  return null;
};

export default SignOutPage;
