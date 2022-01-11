import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MaterialModule} from "./modules/material/material.module";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzalistCartComponent } from './components/pizzalist-cart/pizzalist-cart.component';
import { CartComponent } from './components/cart/cart.component';
import { PackageForPizzalistCartComponent } from './components/package-for-pizzalist-cart/package-for-pizzalist-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PizzaListComponent,
    PizzaItemComponent,
    PizzalistCartComponent,
    CartComponent,
    PackageForPizzalistCartComponent,
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
