import { HttpStatusCode } from "axios";
import * as yup from "yup";

import { prisma } from "@/core/prisma";

type ShareholderInput = {
  userId: string;
  shareholderType: "individual" | "entity";
};

const shareholderSchema = yup.object().shape({
  userId: yup.string().required("User ID is required"),
  shareholderType: yup.string().required("Shareholder type is required"),
});

export async function POST(request: Request, response: Response) {
  try {
    const shareholderData: ShareholderInput = await request.json();
    await shareholderSchema.validate(shareholderData, { abortEarly: false });

    const newShareholder = await prisma.shareholder.create({
      data: {
        user: { connect: { id: shareholderData.userId } },
        shareholderType: shareholderData.shareholderType,
      },
    });

    return Response.json(newShareholder, {
      status: HttpStatusCode.Created,
    });
  } catch (error) {
    return Response.json(
      { message: "Something went wrong" },
      { status: HttpStatusCode.InternalServerError },
    );
  }
}
