import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler, routeNotFoundError } from "./middlewares/errorHandler";
import { config } from "./config";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.cookieSecret));

// static file
app.use(express.static("./public"));

// routes
app.get("/", (req, res) => {
  res.send("hello");
});

// route not found error handlers
app.use(routeNotFoundError);
app.use(errorHandler);

export default app;
