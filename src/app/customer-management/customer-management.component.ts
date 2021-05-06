import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html'
})
export class CustomerManagementComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl(''),
  });

  showAddress: boolean;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  async saveCustomer() {
    var customer: Customer = this.registrationForm.value;

    var customers = await this.customerService.getCustomers();

    if (!this.showAddress) {
      for (const c of customers) {
        if (
          c.firstName == customer.firstName &&
          c.lastName == customer.lastName &&
          c.phone == customer.phone
        ) {
          this.showAddress = false;
          customer.id = c.id;
          customer.address = c.address;
          this.router.navigateByUrl('/menu');
          sessionStorage.setItem('customer', JSON.stringify(customer));
          return;
        }
      }
      this.showAddress = true;
      this.registrationForm.setValue(customer);
      this.registrationForm.get('address').setValidators([Validators.required]);
      return;
    }

    try {
      var newCustomer = await this.customerService.saveCustomer(customer);
      this.router.navigateByUrl('/menu');
      sessionStorage.setItem('customer', JSON.stringify(newCustomer));
    } catch (err) {
      console.log(err.error.message);
    }
  }
}
