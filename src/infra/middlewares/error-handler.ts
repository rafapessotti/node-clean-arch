import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = err as any;
  if (!error?.code) {
    return res.status(500).json({ code: 500, message: "Erro inesperado." });
  }
  return res
    .status(error.code)
    .json({ code: error.code, message: error.message });
};
