import express from "express";
import codes from "http-status-codes";

export const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  /* eslint-enable no-unused-vars */
  const statusCode: number =
    res.statusCode !== codes.OK ? res.statusCode : codes.INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.json({
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
  });
};
