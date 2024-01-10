"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionTypeEnum = ["deposit", "withdraw", "expense", "profit"];
const committeeSchema = new mongoose_1.default.Schema({
    copId: { type: String, required: true },
    trxType: { type: String, required: true },
    amount: { type: Number, required: true },
    collectorDetails: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
    cashierDetails: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
    authorizerDetails: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
    memberDetails: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
    transactionTime: Date,
}, { timestamps: true });
const Committee = mongoose_1.default.model("Committee", committeeSchema);
exports.default = Committee;
