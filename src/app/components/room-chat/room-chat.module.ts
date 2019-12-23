import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatSideComponent } from './chat-side/chat-side.component';
import { FormComponent } from './form/form.component';
import { MyChatComponent } from './my-chat/my-chat.component';
import { RoomChatRoutingModule } from './room-chat.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ChatSideComponent,
    FormComponent,
    MyChatComponent
  ],
  imports: [
    CommonModule,
    RoomChatRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports : [
    CommonModule,
    SharedModule
  ]
})
export class RoomChatModule { }
