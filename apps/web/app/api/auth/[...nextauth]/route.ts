import NextAuth from "next-auth/next";

import { nextAuthOptions } from "./options";

const authHandler = NextAuth(nextAuthOptions);

export { authHandler as GET, authHandler as POST };
