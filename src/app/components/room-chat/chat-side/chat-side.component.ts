import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomChatService } from 'src/app/service/room-chat.service';


@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.scss']
})
export class ChatSideComponent implements OnInit {

  myMessageList = [];

  constructor(
    private routeActive: ActivatedRoute,
    private myMessageService : RoomChatService
  ) { }

  ngOnInit() {
    this.routeActive.params.subscribe(params => {
      let id = params['id'];
      this.myMessageService.getMessage(id)
      .subscribe(allMessage => {
        this.myMessageList = allMessage;
      })
    })
  }

}
