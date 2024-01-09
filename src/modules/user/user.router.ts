import express from "express";

import userController from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUserController);

export default userRouter;
