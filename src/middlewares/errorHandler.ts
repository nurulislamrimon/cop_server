import { ErrorRequestHandler, RequestHandler } from "express";

export const routeNotFoundError: RequestHandler = (req, res, next) => {
  next("Page not found!");
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  res.send({ err: error });
};
