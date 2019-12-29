import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListMessage, User } from 'src/app/model/user.model';
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
  users: User[];
  memberRoom = [];
  myListRoom = [];
  userId: string;
  roomID: number;
  myIdCheck: number;
  isMenuOpen = true;
  isLoading = true;
  opened = false;
  sideHalf = true;
  contentMargin = 250;

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

    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
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

  handleAddUser(addUserRoom: NgForm) {

    this.routeActive.params.subscribe(params => {
      const idRoom = params.id;
      // tslint:disable-next-line: radix
      this.roomID = parseInt(idRoom);
    });

    addUserRoom.value.room_id = this.roomID;
    this.roomID = addUserRoom.value.room_id;
    const userID = addUserRoom.value.user_id;

    this.userService.handleAddUser(this.roomID, userID).subscribe(
      response => {
        this.memberRoom.push(response);
        alert('Success adding user!');
      },
      error => console.log(error)
    );
  }

  handleNewRoom(createRoom: NgForm) {
    const roomName = createRoom.value.room_name;

    this.userService.handleNewRoom(roomName).subscribe(
      response => {
        this.myListRoom.push(response);
        alert('Success create your room!');
      },
      error => console.log(error)
    );
  }

  roomNav(roomID: number) {
    this.routeNav.navigate(['/room', roomID]);
  }

  openSide() {
    this.sideHalf = !this.sideHalf;

    if (!this.sideHalf) {
      this.contentMargin = 65;
    } else {
      this.contentMargin = 250;
    }
  }
}
