import express from "express";

import committeeControllers from "./committee.controller";

const committeeRouter = express.Router();

committeeRouter.get("/", committeeControllers.getAllCommitteeController);

export default committeeRouter;
