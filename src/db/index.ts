import mongoose from "mongoose";
import { config } from "../config";

const connectDB = async () => {
  const connectionString =
    config.NODE_ENV !== "production" ? config.db_remote : config.db_local;
  try {
    const mongooseInstance = await mongoose.connect(connectionString as string);
    console.log("🚀 Database connected successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
