"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const feedback_controller_1 = require("./feedback.controller");
const router = express_1.default.Router();
router.get('/:id', feedback_controller_1.getSingleFeedback);
router.patch('/:id', feedback_controller_1.updateSingleFeedback);
router.delete('/:id', feedback_controller_1.deleteSingleFeedback);
router.get('/', feedback_controller_1.getAllFeedback);
router.post('/create-feedback', feedback_controller_1.createFeedbackIntoDB);
exports.feedbackRoutes = router;
