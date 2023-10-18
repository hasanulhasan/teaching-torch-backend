"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/:id', user_controller_1.getSingleUser);
router.delete('/:id', user_controller_1.deleteSingleUser);
router.patch('/:id', user_controller_1.updateSingleUser);
router.get('/', user_controller_1.getAllUser);
router.post('/create-user', user_controller_1.createUserIntoDB);
exports.userRoutes = router;
