import mongoose from "mongoose";

interface IMember {
  copId: string;
  name: string;
  mobile: string;
  email: string;
  photo: string;
  bloodGroup: string;
  fatherName: string;
  motherName: string;
  address: string;
  joiningData: Date;
  addedBy: {
    type: mongoose.Types.ObjectId;
  };
}
export default IMember;
