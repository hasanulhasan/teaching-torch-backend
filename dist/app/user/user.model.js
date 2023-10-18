"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true }
});
exports.User = (0, mongoose_1.model)('User', exports.ProductSchema);
