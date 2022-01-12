import {Component, OnInit} from '@angular/core';
import {PizzaOrder} from "../../models/PizzaOrder";
import {PizzaOrderService} from "../../services/pizza-order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: PizzaOrder[] = this.pizzaOrderService.orders;

  constructor(private pizzaOrderService: PizzaOrderService) {
  }

  ngOnInit(): void {
  }

  public changeOrderType(x: string): void {
    this.pizzaOrderService.orderType = x;
    console.log(x);
  }

  public checkPrice(): number {
    return Math.round(this.pizzaOrderService.ordersPrice * 100) / 100
  }

  public endOrder(): void {

  }
}
