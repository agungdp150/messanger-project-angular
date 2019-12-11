import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error = false;
  decodeToken: any;

  constructor(
    private authService: AuthService,
    private routeNavigate: Router
  ) {}

  ngOnInit() {}

  loginUsers(myLogin: NgForm) {
    if (!myLogin.valid) {
      return;
    }

    this.isLoading = true;

    const name = myLogin.value.name;
    const email = myLogin.value.email;
    const password = myLogin.value.password;

    this.authService.loginUsers(name, email, password).subscribe(
      response => {
        this.decodeToken = JSON.stringify(response);
        const decoded = jwt_decode(this.decodeToken);
        console.log(decoded);
        localStorage.setItem('token', response);
        localStorage.setItem('id', decoded.user_id);
        this.routeNavigate.navigate(['/']);
        this.isLoading = false;
      },
      errorRes => {
        console.log(errorRes);
        this.error = true;
        this.isLoading = false;
      }
    );
    setTimeout(() => {
      this.error = false;
    }, 2000);

    myLogin.reset();
  }
}
