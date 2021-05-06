import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodSize, BurgerName, PizzaName, FoodType } from 'backend/src/entity/Food';
import { Food } from '../models/food';

const url = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) { }

  getPizzas(): Food[] {
    var pizzas = [];
    for (const name in PizzaName) {
      pizzas.push(new Food(FoodType.PIZZA, name, FoodSize.NORMAL));
    }
    return pizzas;
  }

  getBurgers(): Food[] {
    var burgers = [];
    for (const name in BurgerName) {
      burgers.push(new Food(FoodType.BURGER, name, FoodSize.NORMAL));
    }
    return burgers;
  }

  getFoodSizes(): string[] {
    var sizes = [];
    for (const size in FoodSize) {
      sizes.push(size);
    }
    return sizes;
  }

  saveFood(food: Food): Promise<Food> {
    return this.http.post<Food>(url + "/api/addFood", food).toPromise()
  }
}
