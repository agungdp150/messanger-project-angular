import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isLoading = false;
  error : boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  signUpUsers(myForm : NgForm) {
    if (!myForm.valid) {
      return;
    }

    this.isLoading = true;

    let name = myForm.value.name;
    let email = myForm.value.email;
    let password = myForm.value.password;

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
      this.error = false
    }, 2000)
    myForm.reset();
  }
}
