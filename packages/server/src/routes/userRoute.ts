import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  CreateUser,
  CreateUserProfile,
  DeleteUser,
  GetUsers,
  UpdateUserProfile,
} from "@/db/User";
import { validateRequest } from "@/lib/validateRequest";
import { HandlePrismaError } from "@/lib/prisma";

export const userRouter = express.Router();

userRouter.get("/getall", async (_, res) => {
  try {
    const users = await GetUsers();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

userRouter.post(
  "/delete",
  [body("username", "Provide username").exists()],
  async (req: Request, res: Response) => {
    try {
      // handle error in input data before validation from the database
      const { hasError, sendErrorResponse } = validateRequest(req, res);
      if (hasError) {
        sendErrorResponse();
      } else {
        const { username } = req.body;
        await DeleteUser({ username });
        res.status(200).send({
          message: `Successfully delete account of ${username}`,
        });
      }
    } catch (error) {
      HandlePrismaError(error, res);
    }
  }
);

userRouter.post(
  "/create",
  [
    body("email", "Invalid Email").exists().isEmail(),
    body("username", "Username should be 4 characters long").exists().isLength({
      min: 4,
    }),
  ],
  async (req: Request, res: Response) => {
    try {
      // handle error in input data before validation from the database
      const { hasError, sendErrorResponse } = validateRequest(req, res);
      if (hasError) {
        sendErrorResponse();
      } else {
        // Success status 200 fot the computer
        const { email, username } = req.body;
        await CreateUser({ email, username });

        res.status(200).send({
          message: "Successfully created new user",
        });
      }
    } catch (error) {
      HandlePrismaError(error, res);
    }
  }
);

userRouter.post(
  "/createprofile",
  [
    body("userId", "Uesrname should be 4 characters long")
      .exists()
      .isString()
      .isLength({ min: 4 }),
    body("bio", "Bio should be 4 characters long")
      .exists()
      .isString()
      .isLength({ min: 4 }),
  ],
  async (req: Request, res: Response) => {
    try {
      // handle error in input data before validation from the database
      const { hasError, sendErrorResponse } = validateRequest(req, res);
      if (hasError) {
        sendErrorResponse();
      } else {
        const { userId, bio } = req.body;
        await CreateUserProfile({ userId, bio });
        res.status(200).send({
          message: "Successfully created profile",
        });
      }
    } catch (error) {
      HandlePrismaError(error, res);
    }
  }
);

userRouter.put(
  "/updateprofile",
  [
    body("username", "Invalid authorID").exists().isString(),
    body("bio", "Invalid bio").exists().isString().isLength({ min: 4 }),
  ],
  async (req: Request, res: Response) => {
    try {
      // handle error in input data before validation from the database
      const { hasError, sendErrorResponse } = validateRequest(req, res);
      if (hasError) {
        sendErrorResponse();
      } else {
        const { username, bio } = req.body;
        await UpdateUserProfile({ username, bio });
        res.status(200).send({
          message: "Successfully updated bio",
        });
      }
    } catch (error) {
      HandlePrismaError(error, res);
    }
  }
);
