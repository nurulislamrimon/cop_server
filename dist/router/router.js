"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_router_1 = __importDefault(require("../modules/member/member.router"));
const committee_router_1 = __importDefault(require("../modules/committee/committee.router"));
const router = express_1.default.Router();
const allRoutes = [
    {
        path: "/members",
        element: member_router_1.default,
    },
    {
        path: "/committee",
        element: committee_router_1.default,
    },
];
allRoutes.forEach((route) => router.use(route.path, route.element));
exports.default = router;
