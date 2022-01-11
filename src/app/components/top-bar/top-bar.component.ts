import {Component, OnInit,} from '@angular/core';
import {PizzaService} from "../../services/pizza.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private pizzaService: PizzaService,) { }


  ngOnInit(): void {

  }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }
  goToPlusScroll(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
    window.scrollBy({top: -100})
  }

  change(x: string): void {
    this.pizzaService.setQuery(x);
}


}
