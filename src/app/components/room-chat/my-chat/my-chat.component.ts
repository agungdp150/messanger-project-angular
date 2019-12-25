import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListMessage } from 'src/app/model/user.model';
import { RoomChatService } from 'src/app/service/room-chat.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';

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
  navigateRoom = false;

  constructor(
    private routeActive: ActivatedRoute,
    private myMessageService: RoomChatService,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
    private routeNav: Router
  ) {
    this.userId = localStorage.getItem('id');
    // tslint:disable-next-line: radix
    this.myIdCheck = parseInt(this.userId);
  }

  ngOnInit() {
    this.myMessageList = this.routeActive.snapshot.data.myMessageList;
    console.log(this.myMessageList);

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
      return;
    } else {
      this.myMessageService.handleSend(textSend).subscribe(
        response => {
          this.myMessageList.push(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  openDialog(templateRef) {
    const dialogRef = this.dialog.open(templateRef, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  handleAddUser(addUserRoom: NgForm ) {
    const roomID = addUserRoom.value.room_id;
    const userID = addUserRoom.value.user_id;

    this.userService.handleAddUser(roomID, userID).subscribe(
      response => {
        this.memberRoom.push(response);
        alert('Success adding user!');
      },
      error => console.log(error)
    );
  }

  roomNav(roomID: number) {
    this.navigateRoom = true;
    this.routeNav.navigate(['/room', roomID]);
    console.log(roomID);
  }
}
