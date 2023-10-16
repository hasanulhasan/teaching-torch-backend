import express from 'express'
import { createOrderInDB, deleteSingleOrder, getAllOrders, getSingleOrder } from './order.controller';

const router = express.Router();

router.get('/:id', getSingleOrder)
router.delete('/:id', deleteSingleOrder)
router.get('/', getAllOrders)
router.post('/create-order', createOrderInDB)

export const orderRoutes = router;