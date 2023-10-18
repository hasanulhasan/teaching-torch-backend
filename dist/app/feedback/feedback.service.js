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
exports.updateFeedback = exports.deleteFeedback = exports.getFeedback = exports.getFeedbacks = exports.createFeedbackToDB = void 0;
const feedback_model_1 = require("./feedback.model");
const createFeedbackToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = new feedback_model_1.Feedback(payload);
    yield feedback.save();
    return feedback;
});
exports.createFeedbackToDB = createFeedbackToDB;
const getFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield feedback_model_1.Feedback.find({});
    return feedbacks;
});
exports.getFeedbacks = getFeedbacks;
const getFeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_model_1.Feedback.findById(id);
    return feedback;
});
exports.getFeedback = getFeedback;
const deleteFeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_model_1.Feedback.findByIdAndDelete(id);
    return feedback;
});
exports.deleteFeedback = deleteFeedback;
const updateFeedback = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_model_1.Feedback.findOneAndUpdate({ _id: id }, payload, { new: true });
    return feedback;
});
exports.updateFeedback = updateFeedback;
