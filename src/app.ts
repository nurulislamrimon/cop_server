import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { errorHandler, routeNotFoundError } from "./middlewares/errorHandler";
import { config } from "./config";
import router from "./router/router";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.cookieSecret));

// static file
app.use(express.static("./public"));

// routes

app.get("/", (req: Request, res: Response) => {
  res.send({ success: true, message: "Welcome to the CoP family server!" });
});

app.use(router);

// route not found error handlers
app.use(routeNotFoundError);
app.use(errorHandler);

export default app;
