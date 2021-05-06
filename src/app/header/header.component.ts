import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
  }
  
  getCartSize(){
    return this.cartService.getSize();
  }

  cancel(){
    this.router.navigateByUrl('');
  }
}
