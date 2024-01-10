"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const committeeSchema = new mongoose_1.default.Schema({
    memberDetails: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
    designation: { type: String, required: true },
}, { timestamps: true });
const Committee = mongoose_1.default.model("Committee", committeeSchema);
exports.default = Committee;
