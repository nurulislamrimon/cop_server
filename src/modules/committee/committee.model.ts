import mongoose from "mongoose";
import ICommittee from "./committee.interface";

const committeeSchema = new mongoose.Schema<ICommittee>(
  {
    memberDetails: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    designation: { type: String, required: true },
  },
  { timestamps: true }
);

const Committee = mongoose.model<ICommittee>("Committee", committeeSchema);

export default Committee;
