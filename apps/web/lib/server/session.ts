import { nextAuthOptions } from "@/app/api/[...nextauth]/options";
import { HttpStatusCode } from "axios";
import { getServerSession } from "next-auth";

export const checkServerSession = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session || !session.user) {
    return Response.json(
      { message: "You are not authenticated" },
      { status: HttpStatusCode.Unauthorized },
    );
  }

  return session;
};
