import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pizza} from "../models/Pizza";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaUrl = 'http://localhost:8080/api/menu';

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(`${this.pizzaUrl}`, HTTP_OPTIONS);
  }
}
