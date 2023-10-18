"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.get('/:id', order_controller_1.getSingleOrder);
router.delete('/:id', order_controller_1.deleteSingleOrder);
router.patch('/:id', order_controller_1.updateSingleOrder);
router.get('/', order_controller_1.getAllOrders);
router.post('/create-order', order_controller_1.createOrderInDB);
exports.orderRoutes = router;
