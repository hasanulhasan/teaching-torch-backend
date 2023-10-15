import express from 'express'
import { productRoutes } from '../app/product/products.routes';
import { orderRoutes } from '../app/order/order.routes';
import { userRoutes } from '../app/user/user.routes';
import { feedbackRoutes } from '../app/feedback/feedback.routes';
const routers = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoutes
  },
  {
    path: '/orders',
    route: orderRoutes
  },
  {
    path: '/users',
    route: userRoutes
  },
  {
    path: '/feedbacks',
    route: feedbackRoutes
  }
]

moduleRoutes.forEach(route=> routers.use(route.path, route.route))


export default routers