import { Customer } from './customer';
import { Food } from './food';

export interface Order {
  id: number;
  customer: Customer;
  time: string;
  foods: Food[];
}
