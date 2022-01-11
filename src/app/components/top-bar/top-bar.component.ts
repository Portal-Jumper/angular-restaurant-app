import {Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
    window.scrollBy({top: -100})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
