import { Component, OnInit, ViewEncapsulation, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material';
import { UserAddComponent } from '../user-add/user-add.component';
import { CreateRoomComponent } from '../create-room/create-room.component';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListUserComponent implements OnInit {
  users: User[];
  myListRoom = [];
  navigateRoom = false;
  navigateUser = false;
  isLoading = true;
  ngVersion: string = VERSION.full;
  matVersion = '8.2.3';
  breakpoint: number;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private routeNav: Router,
    public dialogPopup: MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
      this.isLoading = false;
      console.log(this.users);
    });

    this.userService.getRoomList().subscribe(myRoom => {
      this.myListRoom = myRoom;

      console.log(this.myListRoom);
    });

    // tslint:disable-next-line: no-unused-expression
    this.authService;

    this.breakpoint = (window.innerWidth <= 760) ? 2 : 4;
  }

  myChatRoom(roomId: number) {
    this.navigateRoom = true;
    this.routeNav.navigate(['/room', roomId]);
  }

  detailUser(userID: number) {
    this.navigateUser = true;
    this.routeNav.navigate(['/user/user-detail', userID]);
  }

  openDialog(): void  {
     this.dialogPopup.open(UserAddComponent);
  }

  openCreateRoom(): void  {
    this.dialogPopup.open(CreateRoomComponent);
 }

  onResize(event: { target: { innerWidth: number; }; }) {
    this.breakpoint = (event.target.innerWidth <= 760) ? 2 : 4;
  }
}
