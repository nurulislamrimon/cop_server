import mongoose from "mongoose";
import ITransaction from "./transaction.interface";

const transactionTypeEnum = ["deposit", "withdraw", "expense", "profit"];

const committeeSchema = new mongoose.Schema<ITransaction>(
  {
    copId: { type: String, required: true },
    trxType: { type: String, required: true },
    amount: { type: Number, required: true },
    collectorDetails: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    cashierDetails: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    authorizerDetails: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    memberDetails: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    transactionTime: Date,
  },
  { timestamps: true }
);

const Committee = mongoose.model<ITransaction>("Committee", committeeSchema);

export default Committee;
