import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path: 'product', component: ProductComponent },
  {path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
