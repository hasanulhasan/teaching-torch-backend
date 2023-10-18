import express from 'express'
import { createUserIntoDB, deleteSingleUser, getAllUser, getSingleUser, updateSingleUser } from './user.controller';

const router = express.Router();

router.get('/:id', getSingleUser)
router.delete('/:id', deleteSingleUser)
router.patch('/:id', updateSingleUser)
router.get('/', getAllUser)
router.post('/create-user', createUserIntoDB)

export const userRoutes = router;