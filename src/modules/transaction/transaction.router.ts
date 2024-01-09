import express from "express";

import committeeControllers from "./transaction.controller";

const committeeRouter = express.Router();

committeeRouter.get("/", committeeControllers.getAllCommitteeController);

export default committeeRouter;
