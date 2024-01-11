import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { configuration } from "@/core/constants/configs";

import GoogleLogin from "./components/GoogleLogin";

const SigninPage = async () => {
  const session = await getServerSession(nextAuthOptions);

  console.log(session);

  if (session?.user) {
    redirect(configuration.paths.dashbord);
  }

  return (
    <div className="h-full min-h-svh flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Welcome Back!</h1>
      <GoogleLogin />
    </div>
  );
};

export default SigninPage;
