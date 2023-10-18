"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleOrder = exports.deleteSingleOrder = exports.getSingleOrder = exports.getAllOrders = exports.createOrderInDB = void 0;
const order_service_1 = require("./order.service");
const createOrderInDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const order = yield (0, order_service_1.createOrderToDB)(data);
    res.status(200).json({
        status: 'success',
        data: order
    });
    console.log('Order created successful');
});
exports.createOrderInDB = createOrderInDB;
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield (0, order_service_1.getOrders)();
    res.status(200).json({
        status: 'success',
        data: orders
    });
    console.log(`${orders.length} Orders found`);
});
exports.getAllOrders = getAllOrders;
const getSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const order = yield (0, order_service_1.getOrder)(id);
    res.status(200).json({
        status: 'success',
        data: order
    });
    console.log(`order fetched`);
});
exports.getSingleOrder = getSingleOrder;
const deleteSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const order = yield (0, order_service_1.deleteOrder)(id);
    res.status(200).json({
        status: 'success',
        data: order
    });
    console.log('order deleted');
});
exports.deleteSingleOrder = deleteSingleOrder;
const updateSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const order = yield (0, order_service_1.updateOrder)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: order
    });
    console.log('order updated');
});
exports.updateSingleOrder = updateSingleOrder;
