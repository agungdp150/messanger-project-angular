import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class AuthService {
ß  
  private registerApi = "/api/users";
  private loginApi = "/api/login";

  constructor(private http: HttpClient, private navRouter : Router) {}

  signUpUSers(newUser) {
    return this.http.post<any>(this.registerApi, newUser, httpOptions);
  }
  
  loginUsers(user) {
    return this.http.post<any>(this.loginApi, user, httpOptions);
  }

  handleProtectPage() {
    return !!localStorage.getItem('token')
  }

  handleLogout() {
    localStorage.removeItem('token')
    this.navRouter.navigate(['/user/login'])
  }
}
