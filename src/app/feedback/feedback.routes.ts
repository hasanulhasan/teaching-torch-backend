import express from 'express'
import { createFeedbackIntoDB } from './feedback.controller';

const router = express.Router();

router.post('/create-feedback', createFeedbackIntoDB)

export const feedbackRoutes = router;