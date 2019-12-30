import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports : [
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
