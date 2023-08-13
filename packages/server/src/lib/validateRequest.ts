import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (req: Request, res: Response) => {
  const errors = validationResult(req);

  const sendErrorResponse = () => {
    return res.status(400).json({ errors: errors.array() });
  };

  const hasError = !errors.isEmpty();

  return { hasError, sendErrorResponse };
};
