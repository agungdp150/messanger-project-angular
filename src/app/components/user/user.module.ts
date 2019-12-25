import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignUpComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports : [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
