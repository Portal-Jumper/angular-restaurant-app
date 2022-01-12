import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MaterialModule} from "./modules/material/material.module";
import { TopBarComponent } from './components/MainPage/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaListComponent } from './components/MainPage/pizza-list/pizza-list.component';
import { PizzaItemComponent } from './components/MainPage/pizza-item/pizza-item.component';
import { PizzalistCartComponent } from './components/MainPage/pizzalist-cart/pizzalist-cart.component';
import { CartComponent } from './components/MainPage/cart/cart.component';
import { PackageForPizzalistCartComponent } from './components/MainPage/package-for-pizzalist-cart/package-for-pizzalist-cart.component';
import { InfoComponent } from './components/MainPage/info/info.component';
import { PromoComponent } from './components/MainPage/promo/promo.component';
import { PizzaOrderItemComponent } from './components/MainPage/pizza-order-item/pizza-order-item.component';
import { MainPageComponent } from './components/MainPage/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PizzaListComponent,
    PizzaItemComponent,
    PizzalistCartComponent,
    CartComponent,
    PackageForPizzalistCartComponent,
    InfoComponent,
    PromoComponent,
    PizzaOrderItemComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
