"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_routes_1 = require("../app/product/products.routes");
const order_routes_1 = require("../app/order/order.routes");
const user_routes_1 = require("../app/user/user.routes");
const feedback_routes_1 = require("../app/feedback/feedback.routes");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/products',
        route: products_routes_1.productRoutes
    },
    {
        path: '/orders',
        route: order_routes_1.orderRoutes
    },
    {
        path: '/users',
        route: user_routes_1.userRoutes
    },
    {
        path: '/feedbacks',
        route: feedback_routes_1.feedbackRoutes
    }
];
moduleRoutes.forEach(route => routers.use(route.path, route.route));
exports.default = routers;
