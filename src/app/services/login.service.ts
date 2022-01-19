import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/login'



  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {

  }

  logIn(): void {

    let username = 'Admin';
    let password = 'Admin123';
    let body = 'username=' + username + '&password=' + password;

    this.httpClient.post(this.loginUrl,body, HTTP_OPTIONS).subscribe();
  }
}
