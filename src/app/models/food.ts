import { FoodSize, FoodType } from 'backend/src/entity/Food';

export class Food {
  id: number;
  type: FoodType;
  name: string;
  size: FoodSize;
  price: number;
  quantity: number;
  preparation_time: number;

  constructor(type: FoodType, name: string, size: FoodSize) {
    this.id = 0;
    this.name = name;
    this.type = type;
    this.size = size;
    this.quantity = 1;

    switch (type) {
      case FoodType.PIZZA:
        switch (size) {
          case FoodSize.SMALL:
            this.price = 1590;
            this.preparation_time = 15;
            break;
          case FoodSize.NORMAL:
            this.price = 2590;
            this.preparation_time = 20;
            break;
          case FoodSize.LARGE:
            this.price = 3590;
            this.preparation_time = 25;
            break;
        }
        break;

      case FoodType.BURGER:
        this.preparation_time = 10;

        switch (size) {
          case FoodSize.SMALL:
            this.price = 890;
            break;
          case FoodSize.NORMAL:
            this.price = 1290;
            break;
          case FoodSize.LARGE:
            this.price = 1590;
            break;
        }
        break;
    }
  }
}
