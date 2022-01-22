import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {EditServiceService} from "../../../services/edit-service.service";

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor(private loginService: LoginService, private editService: EditServiceService) { }

  ngOnInit(): void {
  }

  setId(): void {
    this.editService.id = this.loginService.userId
  }

}
