import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
