import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports : [
    FormsModule,
    NavbarComponent
  ]
})
export class UserModule { }
