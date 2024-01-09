import mongoose from "mongoose";

interface ITransaction {
  copId: string;
  trxType: string;
  amount: number;
  memberDetails: { type: mongoose.Types.ObjectId };
  collectorDetails: { type: mongoose.Types.ObjectId };
  cashierDetails: { type: mongoose.Types.ObjectId };
  authorizerDetails: { type: mongoose.Types.ObjectId };
  transactionTime: Date;
}
export default ITransaction;
