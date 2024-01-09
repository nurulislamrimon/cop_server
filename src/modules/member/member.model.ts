import mongoose from "mongoose";
import IMember from "./member.interface";
import { memberCopIdMaxLength } from "./member.constants";
import { validateMemberCopId } from "../../utils/common/validateCopId";
import validator from "validator";

const bloodGroupEnum = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const memberSchema = new mongoose.Schema<IMember>(
  {
    copId: {
      type: String,
      required: true,
      maxLength: [memberCopIdMaxLength, "Invalid member unique ID!"],
      validate: {
        validator: validateMemberCopId,
        message: ({ value }) => `${value} is not a valid Member Unique ID!`,
      },
    },
    name: { type: String, required: true, trim: true },
    mobile: {
      type: String,
      required: true,
      validate: {
        validator: (mobile: string) => validator.isMobilePhone(mobile),
        message: ({ value }) => `${value} is not a valid Mobile number!`,
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email: string) => validator.isEmail(email),
        message: ({ value }) => `${value} is not a valid email!`,
      },
    },
    photo: {
      type: String,
      required: true,
      validate: {
        validator: (url: string) => validator.isURL(url),
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
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
  },
  { timestamps: true }
);

const Member = mongoose.model<IMember>("Member", memberSchema);

export default Member;
