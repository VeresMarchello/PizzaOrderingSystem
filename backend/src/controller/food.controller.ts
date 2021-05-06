import { getRepository } from 'typeorm';
import { Food } from '../entity/Food';
import { Controller } from './controller';

export class FoodController extends Controller {
  repository = getRepository(Food);
}