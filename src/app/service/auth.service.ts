import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ß;
  private registerApi = '/api/users';
  private loginApi = '/api/login';

  constructor(private http: HttpClient, private navRouter: Router) {}

  signUpUSers(name: string, email: string, password: string) {
    return this.http.post<any>(
      this.registerApi,
      {
        name,
        email,
        password
      },
      httpOptions
    );
  }

  loginUsers(name: string, email: string, password: string) {
    return this.http.post<any>(
      this.loginApi,
      {
        name,
        email,
        password
      },
      httpOptions
    );
  }

  handleGetToken() {
    return localStorage.getItem('token');
  }

  handleProtectPage() {
    return !!localStorage.getItem('token');
  }

  handleLogout() {
    localStorage.removeItem('token');
    this.navRouter.navigate(['/user/login']);
  }
}
