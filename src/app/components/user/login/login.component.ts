import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error: boolean = false;

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

    let name = myLogin.value.name;
    let email = myLogin.value.email;
    let password = myLogin.value.password;

    this.authService.loginUsers(name, email, password).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("token", response);
        this.routeNavigate.navigate(["/"]);
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
