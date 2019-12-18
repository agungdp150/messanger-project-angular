import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }


  handleNewRoom(createRoom: NgForm) {
    const roomName = createRoom.value.room_name;

    this.userService.handleNewRoom(roomName).subscribe(
      response => {
        // this.myListRoom.push(response);
        alert('Success create your room!');
      },
      error => console.log(error)
    );
    createRoom.reset();
  }

  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 4500);
  }

}
