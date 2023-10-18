"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true }
});
exports.Feedback = (0, mongoose_1.model)('Feedback', exports.ProductSchema);
