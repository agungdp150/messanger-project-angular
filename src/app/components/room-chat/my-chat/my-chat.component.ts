import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListMessage } from "src/app/model/user.model";
import { RoomChatService } from "src/app/service/room-chat.service";

@Component({
  selector: "app-my-chat",
  templateUrl: "./my-chat.component.html",
  styleUrls: ["./my-chat.component.scss"]
})
export class MyChatComponent implements OnInit {
  myMessageList: ListMessage[];

  constructor(
    private routeActive: ActivatedRoute,
    private myMessageService: RoomChatService
  ) {}

  ngOnInit() {
    // this.routeActive.params.subscribe(params => {
    //   let id = params["id"];
    //   this.myMessageService.getMessage(id).subscribe(allMessage => {
    //     this.myMessageList = allMessage;
    //     console.log(this.myMessageList)
    //   });
    // });

    this.myMessageList = this.routeActive.snapshot.data.myMessageList;
    console.log(this.myMessageList)
  }

  myMessage(textSend: ListMessage) {
    this.myMessageService.handleSend(textSend).subscribe(
      response => {
        console.log(response);
        this.myMessageList.push(response);
        
      },
      error => {
        console.log(error);
      }
    );
  }
}
