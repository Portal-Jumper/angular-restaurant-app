import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {LoginService} from "../../../services/login.service";
import {EditServiceService} from "../../../services/edit-service.service";
import {Order} from "../../../models/Order";
import {OrdersService} from "../../../services/orders.service";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  users!: User[];
  orders!: Order[];

  constructor(private loginService: LoginService, private editService: EditServiceService,
              private orderService: OrdersService) {

    loginService.users().subscribe(data => this.users = data)
    orderService.allOrders().subscribe(data => {
      this.orders = data
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  setId(x: number): void {
    this.editService.id = x;
  }

}
