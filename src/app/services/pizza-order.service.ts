import { Injectable } from '@angular/core';
import {PizzaOrder} from "../models/PizzaOrder";

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {

  orders: PizzaOrder[] = [];

  constructor() { }
}
