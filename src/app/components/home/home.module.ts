import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent, 
    ListUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports : [
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
