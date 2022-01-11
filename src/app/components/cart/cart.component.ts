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

}
