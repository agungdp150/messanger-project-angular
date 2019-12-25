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

  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 4500);
  }

}
