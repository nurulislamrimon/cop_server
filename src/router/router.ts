import express from "express";
import memberRouter from "../modules/member/member.router";
import committeeRouter from "../modules/committee/committee.router";

const router = express.Router();

const allRoutes = [
  {
    path: "/user",
    element: memberRouter,
  },
  {
    path: "/committee",
    element: committeeRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
