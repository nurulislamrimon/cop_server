// external imports
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

// internal imports
import sendResponse from "../../utils/common/sendResponse";
import userServices from "./user.service";
import IUser from "./user.interface";

const getAllUserController: RequestHandler = async (req, res, next) => {
  const result = await userServices.getAllUserService();
  sendResponse<IUser[]>(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Members data retrived",
    data: result,
  });
};

export default {
  getAllUserController,
};
