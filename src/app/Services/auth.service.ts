import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined} from 'util';
import {User} from '../Modelo/task';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(name: string, email: string, password: string){
    const url_api = "http://localhost:8081/persona";
    return this.http
    .post<User>(
      url_api,
      {
        name: name,
        email: email,
        password: password
      },
      { headers: this.headers }
    )
    .pipe(map(data => data));
  }
  
  LoginUser(email: string, password: string): Observable<any>{
    const url_api = "http://localhost:8081/login";
    return this.http
    .post<User>(url_api, { email, password}, { headers: this.headers })
    .pipe(map(data => data));
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }

  getCurrentUser():User{
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user:User = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    let accessToken = localStorage.getItem("accessToken");
    const url_api = "http://localhost:8081/login/${accesToken}";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<User>(url_api, { headers: this.headers });
  }
}