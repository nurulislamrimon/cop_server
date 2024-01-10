"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const member_constants_1 = require("./member.constants");
const validateCopId_1 = require("../../utils/common/validateCopId");
const validator_1 = __importDefault(require("validator"));
const bloodGroupEnum = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const memberSchema = new mongoose_1.default.Schema({
    copId: {
        type: String,
        required: true,
        maxLength: [member_constants_1.memberCopIdMaxLength, "Invalid member unique ID!"],
        validate: {
            validator: validateCopId_1.validateMemberCopId,
            message: ({ value }) => `${value} is not a valid Member Unique ID!`,
        },
    },
    name: { type: String, required: true, trim: true },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: (mobile) => validator_1.default.isMobilePhone(mobile),
            message: ({ value }) => `${value} is not a valid Mobile number!`,
        },
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email) => validator_1.default.isEmail(email),
            message: ({ value }) => `${value} is not a valid email!`,
        },
    },
    photo: {
        type: String,
        required: true,
        validate: {
            validator: (url) => validator_1.default.isURL(url),
            message: ({ value }) => `${value} is not a valid photo url!`,
        },
    },
    bloodGroup: {
        type: String,
        enum: {
            values: bloodGroupEnum,
            message: "Blood Group can't be {VALUE}",
        },
    },
    fatherName: { type: String, required: true, trim: true },
    motherName: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    joiningData: { type: Date, required: true },
    addedBy: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Member",
        required: true,
    },
}, { timestamps: true });
const Member = mongoose_1.default.model("Member", memberSchema);
exports.default = Member;
