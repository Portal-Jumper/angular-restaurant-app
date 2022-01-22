import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  users!: User[];

  constructor(private loginService: LoginService ) {

    loginService.users().subscribe(data => this.users = data)
  }

  ngOnInit(): void {
  }

}
