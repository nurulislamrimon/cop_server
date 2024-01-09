// external imports
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

// internal imports
import sendResponse from "../../utils/common/sendResponse";
import memberServices from "./member.service";
import IMember from "./member.interface";

const getAllMemberController: RequestHandler = async (req, res, next) => {
  const result = await memberServices.getAllMemberService();
  sendResponse<IMember[]>(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Members data retrived",
    data: result,
  });
};

export default { getAllMemberController };
