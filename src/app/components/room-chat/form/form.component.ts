import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomChatService } from 'src/app/service/room-chat.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  messageText : any[];

  constructor(
    private routeActive: ActivatedRoute, 
    private handleSendMsg : RoomChatService) { }

  ngOnInit() {
  }

  sendText(message: NgForm ) {

   let myRoom = this.routeActive.params.subscribe(params => {
      let idRoom = params['id'];

      return idRoom
    }
  )
  

  let room_id = message.value.room_id;
  let content = message.value.content;

  console.log(content, room_id)
  // this.handleSendMsg.handleSend(room_id, content).subscribe(
  //   response => {
  //     console.log(response)
  //     this.messageText.push(response)
  //   },
  //   error => {
  //     console.log(error)
  //   }
  // )

  
    message.reset();
  }

  handleSend(event) {
    if (event.keyCode === 13) {
      this.sendText
    }
  }
}
