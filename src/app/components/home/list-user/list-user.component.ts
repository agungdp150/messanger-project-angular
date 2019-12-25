import {
  Component,
  OnInit,
  ViewEncapsulation,
  VERSION
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material';
import { UserAddComponent } from '../user-add/user-add.component';
import { NgForm } from '@angular/forms';

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
    });

    this.userService.getRoomList().subscribe(myRoom => {
      this.myListRoom = myRoom;
    });

    // tslint:disable-next-line: no-unused-expression
    this.authService;

    this.breakpoint = window.innerWidth <= 760 ? 2 : 4;
  }

  myChatRoom(roomId: number) {
    this.navigateRoom = true;
    this.routeNav.navigate(['/room', roomId]);
  }

  detailUser(userID: number) {
    this.navigateUser = true;
    this.routeNav.navigate(['/user/user-detail', userID]);
  }

  openDialog(): void {
    this.dialogPopup.open(UserAddComponent);
  }

  openCreateRoom(templateRef): void {
    const dialogRef = this.dialogPopup.open(templateRef, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    createRoom.reset();
  }

  onResize(event: { target: { innerWidth: number } }) {
    this.breakpoint = event.target.innerWidth <= 760 ? 2 : 4;
  }
}
