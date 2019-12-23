import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListMessage } from 'src/app/model/user.model';
import { RoomChatService } from 'src/app/service/room-chat.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-my-chat',
  templateUrl: './my-chat.component.html',
  styleUrls: ['./my-chat.component.scss']
})
export class MyChatComponent implements OnInit {
  myMessageList: ListMessage[];
  isLoading = true;
  memberRoom = [];
  isMenuOpen = true;
  opened = false;

  constructor(
    private routeActive: ActivatedRoute,
    private myMessageService: RoomChatService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.myMessageList = this.routeActive.snapshot.data.myMessageList;

    this.routeActive.params.subscribe(params => {
      const id = params.id;
      this.myMessageService.getMember(id).subscribe(allMember => {
        this.memberRoom = allMember;
        console.log(this.memberRoom);
        this.isLoading = false;
      });
    });

    // tslint:disable-next-line: no-unused-expression
    this.authService;
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
