import express from 'express'
import { createFeedbackIntoDB, deleteSingleFeedback, getAllFeedback, getSingleFeedback, updateSingleFeedback } from './feedback.controller';

const router = express.Router();

router.get('/:id', getSingleFeedback)
router.patch('/:id', updateSingleFeedback)
router.delete('/:id', deleteSingleFeedback)
router.get('/', getAllFeedback)
router.post('/create-feedback', createFeedbackIntoDB)

export const feedbackRoutes = router;