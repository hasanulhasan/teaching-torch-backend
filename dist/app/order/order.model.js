"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    instructors: [{ type: String }],
    img: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    seat: { type: String, required: true },
    rating: { type: String, required: true },
    status: { type: Boolean, required: true },
    description: { type: String, required: true },
    features: [{ type: String }],
    reviews: [{ type: String }],
    isPaid: { type: Boolean, required: true },
    userEmail: { type: String, required: true }
});
exports.Order = (0, mongoose_1.model)('Order', exports.bookSchema);
