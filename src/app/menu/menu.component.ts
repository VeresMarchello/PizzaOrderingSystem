import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodSize, FoodType } from 'backend/src/entity/Food';
import { Food } from '../models/food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  foodForm = new FormGroup({
    size: new FormControl('NORMAL', [Validators.required]),
  });

  pizzas: Food[] = [];
  burgers: Food[] = [];
  cartSize: number;

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.pizzas = this.foodService.getPizzas();
    this.burgers = this.foodService.getBurgers();
  }

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem('cart')) == null) {
      sessionStorage.setItem('cart', JSON.stringify([]));
    }
  }

  addToCart(food: Food) {
    var foodSize = this.foodForm.value['size'].toLowerCase();
    this.cartService.addToCart(new Food(food.type, food.name, foodSize));
  }

  getFoodSizes(food: Food) {
    return this.foodService.getFoodSizes();
  }

  getCartSize() {
    return this.cartService.getSize();
  }
}
