import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {}

  constructor( private authService : AuthService, private routeNavigate : Router ) { }

  ngOnInit() {
  }

  loginUsers () {
    this.authService.loginUsers(this.loginData)
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response);
          this.routeNavigate.navigate(['/'])
        },
        error => console.log(error)
      )
  }
}
