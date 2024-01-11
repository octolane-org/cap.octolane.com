import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { configuration } from "@/core/constants/configs";
import { prisma } from "@/core/prisma";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: configuration.auth.google.clientId,
      clientSecret: configuration.auth.google.clientSecret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: configuration.auth.secret,
  callbacks: {
    signIn: params => {
      if (params.user.email?.endsWith("@gmail.com")) {
        throw new Error("You must use a Google Workspace account to sign in.");
      }
      return true;
    },
  },
  pages: {
    error: "/auth/error",
  },
};
