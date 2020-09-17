import express from "express";
import codes from "http-status-codes";

export const notFound = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  res.status(codes.NOT_FOUND);
  const error: Error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};
