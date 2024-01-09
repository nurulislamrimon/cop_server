import { Response } from "express";
import { IApiResponse } from "../../interfaces/sendResponse.interface";

const sendResponse = <T>(res: Response, data: IApiResponse<T>) => {
  res.send({
    status: data.status,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  });
};

export default sendResponse;
