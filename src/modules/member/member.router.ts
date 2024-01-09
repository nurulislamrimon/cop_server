import express from "express";

import memberControllers from "./member.controller";

const memberRouter = express.Router();

memberRouter.get("/", memberControllers.getAllMemberController);

export default memberRouter;
