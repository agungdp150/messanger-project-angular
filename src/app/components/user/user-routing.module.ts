import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetaiUserResolverService } from './detail-user/du-resolver.service';


const routes: Routes = [
  {
    path : '',
    component : UserComponent,
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'signup',
        component : SignUpComponent
      },
      {
        path : 'user-detail/:id',
        component : DetailUserComponent,
        resolve : {users : DetaiUserResolverService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
