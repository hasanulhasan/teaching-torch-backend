import express from 'express'
import { createUserIntoDB, deleteSingleUser, getAllUser, getSingleUser } from './user.controller';

const router = express.Router();

router.get('/:id', getSingleUser)
router.get('/', getAllUser)
router.delete('/:id', deleteSingleUser)
router.post('/create-user', createUserIntoDB)

export const userRoutes = router;