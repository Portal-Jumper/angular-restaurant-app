import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./components/cart/cart.component";
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
