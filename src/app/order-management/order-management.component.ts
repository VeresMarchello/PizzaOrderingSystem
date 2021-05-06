import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Oven } from '../models/oven';
import { CartService } from '../services/cart.service';
import { Order } from '../models/order';
import { OrderService } from '../services/order.services';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
})
export class OrderManagementComponent implements OnInit {
  numberOfOvens = 5;
  transportTime = 20;
  discount = 10;
  minimumDiscount = 5000;

  ovens: Oven[];
  customer: Customer;
  totalTime: number;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private foodService: FoodService,
    private router: Router
  ) {
    this.customer = JSON.parse(sessionStorage.getItem('customer'));

    this.ovens = new Array<Oven>(this.numberOfOvens);
    for (let i = 0; i < this.numberOfOvens; i++) {
      this.ovens[i] = new Oven();
    }
    this.makeFoods();
    this.totalTime = this.getTotalTime();
  }

  ngOnInit(): void {}

  getFoods() {
    return this.cartService.getFoods();
  }

  getOvens() {
    return this.ovens;
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getCartSize() {
    return this.cartService.getSize();
  }

  getDiscountPrice() {
    return (
      Math.round((this.getTotalPrice() * (1 - this.discount / 100)) / 5) * 5
    );
  }

  getMaxFoodCount() {
    this.ovens.sort((o1, o2) => o1.foods.length - o2.foods.length);
    return this.ovens[this.numberOfOvens -1].foods.length;
  }

  makeFoods() {
    for (const f of this.getFoods()) {
      for (var i = 0; i < f.quantity; i++) {
        this.ovens.sort((o1, o2) => o1.bakingTime - o2.bakingTime);
        this.ovens[0].makeFood(f);
      }
    }
  }

  getTotalTime() {
    let time = this.transportTime;
    this.ovens.sort((o1, o2) => o1.bakingTime - o2.bakingTime);
    time += this.ovens[this.numberOfOvens - 1].bakingTime;
    return time;
  }

  async saveOrder() {
    var date = new Date(Date.now());
    var time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    var newFoods = [];
    for (const f of this.getFoods()) {
      var newFood = await this.foodService.saveFood(f);
      newFoods.push(newFood);
    }

    var order: Order = {
      id: 0,
      foods: newFoods,
      customer: this.customer,
      time: time,
    };

    this.orderService.saveOrder(order);
    this.router.navigateByUrl('/');
  }
}
