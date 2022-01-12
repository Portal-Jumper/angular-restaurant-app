import { Injectable } from '@angular/core';
import {PizzaOrder} from "../models/PizzaOrder";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pizza} from "../models/Pizza";
import {catchError, Observable} from "rxjs";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {

  private url = 'http://localhost:8080/api/menu'

  orders: PizzaOrder[] = [];
  orderType: string = '';
  ordersPrice: number = 0;

  constructor(private httpClient: HttpClient) {
  }


}
