import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PackageForPizzalistCartComponent} from "./components/package-for-pizzalist-cart/package-for-pizzalist-cart.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  {path: '', component: PackageForPizzalistCartComponent},
  {path: 'login', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
