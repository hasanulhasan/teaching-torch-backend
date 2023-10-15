import express from 'express'
import { createUserIntoDB, getSingleUser } from './user.controller';

const router = express.Router();

router.get('/:id', getSingleUser)
router.post('/create-user', createUserIntoDB)

export const userRoutes = router;