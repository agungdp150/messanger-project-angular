import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListMessage } from 'src/app/model/user.model';
import { RoomChatService } from 'src/app/service/room-chat.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-chat',
  templateUrl: './my-chat.component.html',
  styleUrls: ['./my-chat.component.scss']
})
export class MyChatComponent implements OnInit {
  myMessageList: ListMessage[];
  isLoading = true;
  userId: string;
  myIdCheck: number;
  memberRoom = [];
  myListRoom = [];
  isMenuOpen = true;
  opened = false;

  constructor(
    private routeActive: ActivatedRoute,
    private myMessageService: RoomChatService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.userId = localStorage.getItem('id');
    console.log(this.userId);
    // tslint:disable-next-line: radix
    this.myIdCheck = parseInt(this.userId);
  }

  ngOnInit() {
    this.myMessageList = this.routeActive.snapshot.data.myMessageList;

    this.routeActive.params.subscribe(params => {
      const id = params.id;
      this.myMessageService.getMember(id).subscribe(allMember => {
        this.memberRoom = allMember;
        this.isLoading = false;
      });
    });

    this.userService.getRoomList().subscribe(myRoom => {
      this.myListRoom = myRoom;
    });

    // tslint:disable-next-line: no-unused-expression
    this.authService;
  }

  myMessage(textSend: ListMessage) {
    if (textSend.content === null || textSend.content === '') {
      console.log(textSend);
      return;
    } else {
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
}
