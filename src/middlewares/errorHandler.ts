import { ErrorRequestHandler, RequestHandler } from "express";
import { IErrorMessage } from "../interfaces/error.interface";
import ApiError from "../Errors/ApiError";
import { StatusCodes } from "http-status-codes";
import { config } from "../config";

export const routeNotFoundError: RequestHandler = (req, res, next) => {
  next(new ApiError(StatusCodes.NOT_FOUND, "Route doesn't exist"));
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let message = "";
  let statusCode = 400;
  let errMessages: IErrorMessage[] = [];
  let stack;

  if (typeof error === "string") {
    message = error;
  } else {
    message = error.message || "Internal server error!";
    statusCode = error.status;
  }

  if (!errMessages.length) {
    errMessages = [
      {
        path: req.originalUrl,
        message: message,
      },
    ];
  }
  if (config.NODE_ENV !== "production") {
    stack = error.stack;
  }

  res.status(statusCode).send({ success: false, message, errMessages, stack });
};
