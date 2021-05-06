import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { MenuComponent } from './menu/menu.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { Authorization } from './services/authorization';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'customer-details'},
  { path: 'registration', component:CustomerManagementComponent},
  { path: 'customer-details', component:CustomerManagementComponent},
  { path: 'menu', component:MenuComponent, canActivate:[Authorization]},
  { path: 'cart', component:CartComponent, canActivate:[Authorization]},
  { path: 'order-details', component:OrderManagementComponent, canActivate:[Authorization]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
