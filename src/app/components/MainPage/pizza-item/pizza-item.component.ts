import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../../models/Pizza";
import {CartComponent} from "../cart/cart.component";
import {PizzaOrderService} from "../../../services/pizza-order.service";
import {PizzaOrder} from "../../../models/PizzaOrder";

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  @Input()
  public pizza!: Pizza;

  constructor(private pizzaOrderService: PizzaOrderService) { }

  ngOnInit(): void {
  }

  public addOrderSmall(): void {
    this.pizzaOrderService.orders.push(new PizzaOrder(
      this.pizzaOrderService.orders.length,this.pizza.id,this.pizza.name,"mała",10.61))
    this.countOrderPrice();
  }
  public addOrderMedium(): void {
    this.pizzaOrderService.orders.push(new PizzaOrder(
      this.pizzaOrderService.orders.length,this.pizza.id,this.pizza.name,"średnia",23.23))
    this.countOrderPrice();
  }
  public addOrderLarge(): void {
    this.pizzaOrderService.orders.push(new PizzaOrder(
      this.pizzaOrderService.orders.length,this.pizza.id,this.pizza.name,"duża",31.20))
    this.countOrderPrice();
  }

  public countOrderPrice(): void {
    let price: number = 0;
    this.pizzaOrderService.orders.forEach(x => price += x.price)
    this.pizzaOrderService.ordersPrice = price;
  }

}
