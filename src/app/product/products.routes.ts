import express from 'express'
import { getAllProducts, getSingleProduct } from './product.controller';
const router = express.Router();

router.get('/:id', getSingleProduct)
router.get('/', getAllProducts)

export const productRoutes = router;