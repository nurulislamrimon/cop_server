import express from "express";
import memberRouter from "../modules/member/member.router";

const router = express.Router();

const allRoutes = [
  {
    path: "/user",
    element: memberRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
