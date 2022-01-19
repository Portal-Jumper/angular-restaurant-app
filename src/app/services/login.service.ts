import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/login'

  private helper = new JwtHelperService();

  private _username: String = '';
  private password: String = '';
  private body: String = '';
  private _token: any = '';
  private _loggedIn: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router,) {

  }

  logIn(username: String, password: String): void {

    this._username = username;
    this.password = password;
    this.body = 'username=' + this._username + '&password=' + this.password;

    this.httpClient.post<any>(this.loginUrl, this.body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      observe: "response"
    }).subscribe(resp => {
      this._token = resp.headers.get('Authorization');
      this.router.navigate([''])
      this._loggedIn = true;
    });
  }


  get token(): any {
    return this._token;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get username(): String {
    return this._username;
  }
}
