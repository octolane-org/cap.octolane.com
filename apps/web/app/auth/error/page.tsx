import { nextAuthOptions } from "@/app/api/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { ServerPageProps } from "@/core/types/common.type";

const AuthErrorPage = async ({
  searchParams,
}: ServerPageProps<any, { error: string }>) => {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="py-10 flex flex-col items-center justify-center gap-8">
      Error while sign in!
      <p>{searchParams.error}</p>
    </div>
  );
};

export default AuthErrorPage;
