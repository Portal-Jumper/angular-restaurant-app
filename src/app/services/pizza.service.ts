import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";
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

  private query = ''

  private pizzaUrl = 'http://localhost:8080/api/?query=' + this.query;

  constructor(private httpClient: HttpClient) {
  }

  public getMenu(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(`${this.pizzaUrl}`, HTTP_OPTIONS);
  }

  public setQuery(x: string): void {
    this.query = x;
  }

}
