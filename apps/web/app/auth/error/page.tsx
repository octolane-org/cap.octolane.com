import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Container from "@/components/Container";
import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import type { ServerPageProps } from "@/types/common.type";

const AuthErrorPage = async ({
  searchParams,
}: ServerPageProps<any, { error: string }>) => {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user) {
    redirect("/");
  }

  return (
    <Container>
      <div className="py-10 flex flex-col items-center justify-center gap-8">
        <Alert variant="destructive">
          <ExclamationCircleIcon className="h-4 w-4" />
          <AlertTitle>Error while sign in!</AlertTitle>
          <AlertDescription>{searchParams.error}</AlertDescription>
        </Alert>
        <GoogleLoginButton />
      </div>
    </Container>
  );
};

export default AuthErrorPage;
