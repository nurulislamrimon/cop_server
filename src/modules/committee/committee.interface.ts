import mongoose from "mongoose";

interface ICommittee {
  memberDetails: {
    type: mongoose.Types.ObjectId;
  };
  designation: string;
}
export default ICommittee;
