"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envFilePath = path_1.default.join(__dirname, "../../.env");
dotenv_1.default.config({ path: envFilePath });
exports.config = {
    port: process.env.port,
    cookieSecret: process.env.cookie_secret,
    db_remote: process.env.db_remote,
    db_local: process.env.db_local,
    NODE_ENV: process.env.NODE_ENV,
};
