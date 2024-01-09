import express from "express";
import userRouter from "../modules/user/user.router";

const router = express.Router();

const allRoutes = [
  {
    path: "/",
    element: userRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
