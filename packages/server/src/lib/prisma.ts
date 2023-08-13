import { Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type UniqueConstraintErrorMeta = {
  target: string[];
};

export type RecordDoesNotExists = {
  cause: string;
};

const PrismaErrorCode = {
  DoNotExits: "P2025",
  UniqueContraint: "P2002",
};

export const HandlePrismaError = (error: unknown, res: Response) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case PrismaErrorCode.UniqueContraint: {
        const errorObj: UniqueConstraintErrorMeta = JSON.parse(
          JSON.stringify(error.meta)
        );
        return res.status(400).send({
          status: 400,
          message: `${errorObj.target[0]} is already in use`,
        });
      }
      case PrismaErrorCode.DoNotExits: {
        const errorObj: RecordDoesNotExists = JSON.parse(
          JSON.stringify(error.meta)
        );
        return res.status(400).send({
          status: 400,
          message: errorObj.cause,
        });
      }
      default: {
        return res.status(500).send("Internal server error");
      }
    }
  } else {
    res.status(500).send("Internal server error");
  }
};
