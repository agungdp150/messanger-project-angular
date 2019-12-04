import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyChatComponent } from './my-chat/my-chat.component';


const routes: Routes = [
  {
    path : '',
    component : MyChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomChatRoutingModule { }