import { Router } from 'express';
import { CustomerController } from '../controller/customer.controller';
import { FoodController } from '../controller/food.controller';
import { OrderController } from '../controller/order.controller';

export function getRouter(): Router {
  const router = Router();

  const customerController = new CustomerController();
  const orderController = new OrderController();
  const foodController = new FoodController();

  router.get('/getCustomers', customerController.getAll);
  router.get('/getCustomer/:id', customerController.getOne);
  router.post('/addCustomer', customerController.create);

  router.get('/getOrders', orderController.getAll);
  router.post('/addOrder', orderController.create);

  router.post('/addFood', foodController.create);
  
  return router;
}
