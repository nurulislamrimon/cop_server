"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.send({
        status: data.status,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
    });
};
exports.default = sendResponse;
