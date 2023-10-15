import express from 'express'
import { createOrderInDB, getAllOrders } from './order.controller';

const router = express.Router();

router.get('/', getAllOrders)
router.post('/create-order', createOrderInDB)

export const orderRoutes = router;