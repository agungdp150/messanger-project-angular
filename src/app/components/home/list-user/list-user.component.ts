import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  myListRoom = [];
  navigateRoom = false;
  isLoading = true;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private routeNav: Router
  ) {}

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
      this.isLoading = false;
    });

    // this.userService.getRoomList().subscribe(myRoom => {
    //   this.myListRoom = myRoom;
    // });

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
}
