import { getRepository } from 'typeorm';
import { Customer } from '../entity/Customer';
import { Controller } from './controller';

export class CustomerController extends Controller {
  repository = getRepository(Customer);
}
