import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isLoading = false;
  error = false;
  decodeToken: any;

  constructor(
    private authService: AuthService,
    private routeNavigate: Router
    ) { }

  ngOnInit() {
  }


  signUpUsers(myForm: NgForm) {
    if (!myForm.valid) {
      return;
    }

    this.isLoading = true;

    const name = myForm.value.name;
    const email = myForm.value.email;
    const password = myForm.value.password;

    this.authService.signUpUSers(name, email, password)
    .subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
      },
      errorRes => {
        console.log(errorRes);
        this.isLoading = false;
        this.error = true;
      }
    );

    setTimeout(() => {
      this.authService.loginUsers(email, password).subscribe(
        response => {
          this.decodeToken = JSON.stringify(response);
          const decoded = jwt_decode(this.decodeToken);
          // console.log(decoded);
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
    }, 2500);

    setTimeout(() => {
      this.error = false;
    }, 3000);
    myForm.reset();
  }
}
