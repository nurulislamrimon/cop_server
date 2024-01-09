import dotenv from "dotenv";
import path from "path";

const envFilePath = path.join(__dirname, "../../.env");
dotenv.config({ path: envFilePath });

export const config = {
  port: process.env.port,
  cookieSecret: process.env.cookie_secret,
  db_remote: process.env.db_remote,
  db_local: process.env.db_local,
  NODE_ENV: process.env.NODE_ENV,
};
