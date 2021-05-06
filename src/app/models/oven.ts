import { Food } from './food';

export class Oven {
  isFree: boolean;
  bakingTime: number;
  foods: Food[];

  constructor() {
    this.isFree = true;
    this.bakingTime = 0;
    this.foods = [];
  }

  makeFood(food: Food) {
    this.isFree = false;
    this.bakingTime += food.preparation_time;
    this.foods.push(food);
  }
}
