"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_controller_1 = __importDefault(require("./member.controller"));
const memberRouter = express_1.default.Router();
memberRouter.get("/", member_controller_1.default.getAllMemberController);
exports.default = memberRouter;
