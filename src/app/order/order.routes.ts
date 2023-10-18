import express from 'express'
import { createOrderInDB, deleteSingleOrder, getAllOrders, getSingleOrder, updateSingleOrder } from './order.controller';

const router = express.Router();

router.get('/:id', getSingleOrder)
router.delete('/:id', deleteSingleOrder)
router.patch('/:id', updateSingleOrder)
router.get('/', getAllOrders)
router.post('/create-order', createOrderInDB)

export const orderRoutes = router;