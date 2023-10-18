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
exports.updateSingleFeedback = exports.deleteSingleFeedback = exports.getSingleFeedback = exports.getAllFeedback = exports.createFeedbackIntoDB = void 0;
const feedback_service_1 = require("./feedback.service");
const createFeedbackIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const feedback = yield (0, feedback_service_1.createFeedbackToDB)(data);
    res.status(200).json({
        status: 'success',
        data: feedback
    });
    console.log('feedback created successful');
});
exports.createFeedbackIntoDB = createFeedbackIntoDB;
const getAllFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield (0, feedback_service_1.getFeedbacks)();
    res.status(200).json({
        status: 'success',
        data: feedbacks
    });
    console.log(`feedbacks fetched`);
});
exports.getAllFeedback = getAllFeedback;
const getSingleFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const feedback = yield (0, feedback_service_1.getFeedback)(id);
    res.status(200).json({
        status: 'success',
        data: feedback
    });
    console.log(`feedback fetched`);
});
exports.getSingleFeedback = getSingleFeedback;
const deleteSingleFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const feedback = yield (0, feedback_service_1.deleteFeedback)(id);
    res.status(200).json({
        status: 'success',
        data: feedback
    });
    console.log('feedback deleted');
});
exports.deleteSingleFeedback = deleteSingleFeedback;
const updateSingleFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const feedback = yield (0, feedback_service_1.updateFeedback)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: feedback
    });
    console.log('feedback updated');
});
exports.updateSingleFeedback = updateSingleFeedback;
