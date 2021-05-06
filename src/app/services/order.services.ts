import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Food } from "../models/food"
import { Order } from "../models/order"

const url = 'http://localhost:8080'

@Injectable({
  providedIn: "root"
})
export class OrderService {
    constructor(private http: HttpClient) { }

  getOrders(): Promise<Order[]> {
    return this.http.get<Order[]>(url + "/api/getOrders").toPromise()
  }

  saveOrder(order: Order): Promise<Order> {
    return this.http.post<Order>(url + "/api/addOrder", order).toPromise()
  }

  saveFood(food: Food): Promise<Food> {
    return this.http.post<Food>(url + "/api/addFood", food).toPromise()
  }
}