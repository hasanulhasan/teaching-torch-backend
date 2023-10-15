import express from 'express'
import { createProductIntoDB, getAllProducts, getSingleProduct } from './product.controller';
const router = express.Router();

router.get('/:id', getSingleProduct)
router.get('/', getAllProducts)
router.post('/create-product', createProductIntoDB)

export const productRoutes = router;