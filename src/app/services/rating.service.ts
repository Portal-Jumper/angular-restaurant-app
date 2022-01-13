import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rating} from "../models/Rating";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratingUrl = 'http://localhost:8080/api/menu'

  constructor(private httpClient: HttpClient) { }

  public getRatings(): Observable<Rating[]> {
    return this.httpClient.get<Rating[]>(`${this.ratingUrl}`, HTTP_OPTIONS)
  }
}
