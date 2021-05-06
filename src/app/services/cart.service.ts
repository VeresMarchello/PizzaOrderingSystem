import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    if (JSON.parse(sessionStorage.getItem('cart')) == null){
      sessionStorage.setItem('cart', JSON.stringify([]));
    }
  }

  getFoods(): Food[] {
    var foods = JSON.parse(sessionStorage.getItem('cart'));
    return foods != null ? foods : [];
  }

  addToCart(food: Food) {
    var foods: Food[];

    var foods: Food[] = this.getFoods();

    for (const f of foods) {
      if(f.name.toLowerCase() == food.name.toLowerCase() && f.type.toLowerCase() == food.type.toLowerCase() && f.size.toLowerCase() == food.size.toLowerCase()){
        f.quantity += 1;
        sessionStorage.setItem('cart', JSON.stringify(foods));
        return;
      }
    }
    
    foods.push(food);
    sessionStorage.setItem('cart', JSON.stringify(foods));
  }
  
  changeFoodQuantity(food: Food, q: number) {
    var foods: Food[] = this.getFoods();
    
    for (const f of foods) {
      if(f.name.toLowerCase() == food.name.toLowerCase() && f.type.toLowerCase() == food.type.toLowerCase() && f.size.toLowerCase() == food.size.toLowerCase()){
        f.quantity += q;

        if(f.quantity <= 0){
          foods.splice(foods.indexOf(f, 0), 1);
        }

        sessionStorage.setItem('cart', JSON.stringify(foods));
        return;
      }
    }
  }

  getTotalPrice(){
    var price = 0;
    var foods: Food[] = this.getFoods();
    
    for (const f of foods) {
      price += f.quantity * f.price;
    }

    return price;
  }

  getSize(){
    var size = 0;
    var foods: Food[] = this.getFoods();
    
    for (const f of foods) {
      size += f.quantity;
    }

    return size;
  }
}