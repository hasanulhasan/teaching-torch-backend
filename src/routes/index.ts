import express from 'express'
import { productRoutes } from '../app/product/products.routes';
import { orderRoutes } from '../app/order/order.routes';
const routers = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoutes
  },
  {
    path: '/orders',
    route: orderRoutes
  }
]

moduleRoutes.forEach(route=> routers.use(route.path, route.route))


export default routers