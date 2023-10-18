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
exports.updateSingleProduct = exports.deleteSingleProduct = exports.getSingleProduct = exports.getAllProducts = exports.createProductIntoDB = void 0;
const product_service_1 = require("./product.service");
const createProductIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const product = yield (0, product_service_1.createProductToDB)(data);
    res.status(200).json({
        status: 'success',
        data: product
    });
    console.log('product created successful');
});
exports.createProductIntoDB = createProductIntoDB;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.getProducts)();
    res.status(200).json({
        status: 'success',
        data: products
    });
    console.log(`${products.length} products fetched`);
});
exports.getAllProducts = getAllProducts;
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield (0, product_service_1.getProduct)(id);
    res.status(200).json({
        status: 'success',
        data: product
    });
    console.log(`product fetched`);
});
exports.getSingleProduct = getSingleProduct;
const deleteSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield (0, product_service_1.deleteProduct)(id);
    res.status(200).json({
        status: 'success',
        data: product
    });
    console.log('product deleted');
});
exports.deleteSingleProduct = deleteSingleProduct;
const updateSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const product = yield (0, product_service_1.updateProduct)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: product
    });
    console.log('product updated');
});
exports.updateSingleProduct = updateSingleProduct;
