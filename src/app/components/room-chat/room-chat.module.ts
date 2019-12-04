import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatSideComponent } from './chat-side/chat-side.component';
import { FormComponent } from './form/form.component';
import { MyChatComponent } from './my-chat/my-chat.component';
import { RoomChatRoutingModule } from './room-chat.routing.module';



@NgModule({
  declarations: [
    ChatSideComponent,
    FormComponent,
    MyChatComponent
  ],
  imports: [
    RoomChatRoutingModule,
    SharedModule
  ]
})
export class RoomChatModule { }
