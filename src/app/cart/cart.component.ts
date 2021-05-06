import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getFoods() {
    return this.cartService.getFoods();
  }

  changeQuantity(food: Food, q: number) {
    this.cartService.changeFoodQuantity(food, q);
  }

  removeFromCart(pizza: Food) {
    this.changeQuantity(pizza, -1000);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getCartSize() {
    return this.cartService.getSize();
  }
}
