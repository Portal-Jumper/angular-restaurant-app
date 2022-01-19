import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rating} from "../models/Rating";
import {DOCUMENT} from "@angular/common";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private pizzaId = 0;

  private ratingUrl = 'http://localhost:8080/api/menu?query='

  constructor(private httpClient: HttpClient, @Inject(DOCUMENT)private document: Document) {
  }

  public getRatings(): Observable<Rating[]> {
    let url = this.document.location.href
    this.pizzaId = Number(url.substring(29))
    return this.httpClient.get<Rating[]>(`${this.ratingUrl}`, HTTP_OPTIONS)
  }

}
