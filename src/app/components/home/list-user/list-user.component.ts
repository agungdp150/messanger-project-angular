import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { MatTableDataSource } from '@angular/material';


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
    private routeNav: Router
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

  handleAddUser(addUserRoom: NgForm ) {
    const roomID = addUserRoom.value.room_id;
    const userID = addUserRoom.value.user_id;
    console.log(roomID, userID);
    this.userService.handleAddUser(roomID, userID).subscribe(
      response => {
        console.log(response);
        alert('Success adding user!');
      },
      error => console.log(error)
    );
  }

  myChatRoom(roomId: number) {
    this.navigateRoom = true;
    this.routeNav.navigate(['/room', roomId]);
  }

  detailUser(userID: number) {
    this.navigateUser = true;
    this.routeNav.navigate(['/user/user-detail', userID]);
  }
}
