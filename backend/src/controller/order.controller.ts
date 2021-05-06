import { getRepository } from 'typeorm';
import { Order } from '../entity/Order';
import { Controller } from './controller';

export class OrderController extends Controller {
  repository = getRepository(Order);
}