import express from 'express'
import { createProductIntoDB, deleteSingleProduct, getAllProducts, getSingleProduct, updateSingleProduct } from './product.controller';
const router = express.Router();

router.get('/:id', getSingleProduct)
router.patch('/:id', updateSingleProduct)
router.delete('/:id', deleteSingleProduct)
router.get('/', getAllProducts)
router.post('/create-product', createProductIntoDB)

export const productRoutes = router;