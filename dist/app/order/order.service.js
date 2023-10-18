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
exports.updateOrder = exports.deleteOrder = exports.getOrder = exports.getOrders = exports.createOrderToDB = void 0;
const order_model_1 = require("./order.model");
const createOrderToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new order_model_1.Order(payload);
    yield order.save();
    return order;
});
exports.createOrderToDB = createOrderToDB;
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.Order.find({});
    return orders;
});
exports.getOrders = getOrders;
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.Order.findById(id);
    return order;
});
exports.getOrder = getOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.Order.findByIdAndDelete(id);
    return order;
});
exports.deleteOrder = deleteOrder;
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.Order.findOneAndUpdate({ _id: id }, payload, { new: true });
    return order;
});
exports.updateOrder = updateOrder;
