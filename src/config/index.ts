import dotenv from "dotenv";
import path from "path";

const envFilePath = path.join(__dirname, "../../.env");
dotenv.config({ path: envFilePath });

export const config = {
  PORT: process.env.PORT,
};
