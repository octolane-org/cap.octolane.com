import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { configuration } from "@/core/constants/configs";
import { ServerPageProps } from "@/core/types/common.type";

import GoogleLogin from "../signin/components/GoogleLogin";

const AuthErrorPage = async ({
  searchParams,
}: ServerPageProps<any, { error: string }>) => {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user) {
    redirect(configuration.paths.dashbord);
  }

  return (
    <div className="h-full min-h-svh flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Error while sign in!</h1>
      <p className="text-red-500">{searchParams.error}</p>
      <GoogleLogin />
    </div>
  );
};

export default AuthErrorPage;
