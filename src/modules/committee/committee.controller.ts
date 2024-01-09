// external imports
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

// internal imports
import sendResponse from "../../utils/common/sendResponse";
import committeeServices from "./committee.service";
import ICommittee from "./committee.interface";

const getAllCommitteeController: RequestHandler = async (req, res, next) => {
  const result = await committeeServices.getAllCommitteeService();
  sendResponse<ICommittee[]>(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Committee data retrived",
    data: result,
  });
};

export default { getAllCommitteeController };
