"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.routeNotFoundError = void 0;
const ApiError_1 = __importDefault(require("../Errors/ApiError"));
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
const routeNotFoundError = (req, res, next) => {
    next(new ApiError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Route doesn't exist"));
};
exports.routeNotFoundError = routeNotFoundError;
const errorHandler = (error, req, res, next) => {
    let message = "";
    let statusCode = 400;
    let errMessages = [];
    let stack;
    if (typeof error === "string") {
        message = error;
    }
    else {
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
    if (config_1.config.NODE_ENV !== "production") {
        stack = error.stack;
    }
    res.status(statusCode).send({ success: false, message, errMessages, stack });
};
exports.errorHandler = errorHandler;
