import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
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

  displayedColumns = ['no', 'name', 'email', 'userId', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private routeNav: Router,
    public dialogPopup: MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.dataSource.data = listUsers;
      this.isLoading = false;
    });

    this.userService.getRoomList().subscribe(myRoom => {
      this.myListRoom = myRoom;

      console.log(this.myListRoom);
    });

    // tslint:disable-next-line: no-unused-expression
    this.authService;
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
}
