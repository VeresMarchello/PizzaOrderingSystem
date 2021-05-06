import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Customer } from "../models/customer"

const url = 'http://localhost:8080'

@Injectable({
  providedIn: "root"
})
export class CustomerService {
    constructor(private http: HttpClient) { }

  getCustomers(): Promise<Customer[]> {
    return this.http.get<Customer[]>(url + "/api/getCustomers").toPromise()
  }

  getCustomerById(id): Promise<Customer> {
    return this.http.get<Customer>(url + "/api/getCustomer/" + id).toPromise()
  }

  saveCustomer(customer: Customer): Promise<Customer> {
    return this.http.post<Customer>(url + "/api/addCustomer", customer).toPromise()
  }
}