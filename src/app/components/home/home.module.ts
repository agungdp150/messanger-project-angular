import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    UserAddComponent,
    ListUserComponent,
    CreateRoomComponent
  ],
  entryComponents: [UserAddComponent, CreateRoomComponent],
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
