import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }


  handleAddUser(addUserRoom: NgForm ) {
    const roomID = addUserRoom.value.room_id;
    const userID = addUserRoom.value.user_id;
    this.userService.handleAddUser(roomID, userID).subscribe(
      response => {
        console.log(response);
        alert('Success adding user!');
      },
      error => console.log(error)
    );
  }

}
