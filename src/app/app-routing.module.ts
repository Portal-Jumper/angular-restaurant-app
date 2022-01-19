import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/MainPage/main-page/main-page.component";
import {LoginPageComponent} from "./components/loginPage/login-page/login-page.component";
import {RatingPageComponent} from "./components/ratingPage/rating-page/rating-page.component";
import {RegisterPageComponent} from "./components/registerPage/register-page/register-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'rating/:id', component: RatingPageComponent},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
