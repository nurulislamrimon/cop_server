"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorHandler_1 = require("./middlewares/errorHandler");
const config_1 = require("./config");
const router_1 = __importDefault(require("./router/router"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)(config_1.config.cookieSecret));
// static file
app.use(express_1.default.static("./public"));
// routes
app.get("/", (req, res) => {
    res.send({ success: true, message: "Welcome to the CoP family server!" });
});
app.use(router_1.default);
// route not found error handlers
app.use(errorHandler_1.routeNotFoundError);
app.use(errorHandler_1.errorHandler);
exports.default = app;
