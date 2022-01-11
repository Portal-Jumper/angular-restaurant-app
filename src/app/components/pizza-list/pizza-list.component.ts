import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../models/Pizza";
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  menu!: Pizza[];

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getTodos().subscribe(
      (todos: Pizza[]) => {
        this.menu = todos;
      },
    )
  }

  ngOnInit(): void {
  }

}
