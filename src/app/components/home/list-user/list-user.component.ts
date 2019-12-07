import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from "src/app/service/user.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { User } from "src/app/model/user.model";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"]
})
export class ListUserComponent implements OnInit {
  users: User[];
  myListRoom = [];
  addUserRoom = {};

  modalRef: BsModalRef;

  constructor(
    private userService: UserService,
    private modalService: BsModalService,
    private authService: AuthService,
    private routeNav : Router
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
      // console.log(listUsers)
    });

    this.authService;

    this.userService.getRoomList().subscribe(myRoom => {
      this.myListRoom = myRoom;
    });
  }

  handleNewRoom(createRoom: NgForm) {
    // console.log(createRoom.value);

    let roomName = createRoom.value.room_name;

    this.userService.handleNewRoom(roomName).subscribe(
      response => {
        console.log(response);
      },
      error => console.log(error)
    );
    createRoom.reset();
  }

  handleAddUser() {
    this.userService.handleAddUser(this.addUserRoom).subscribe(
      response => {
        console.log(response);
      },
      error => console.log(error)
    );
  }

  myChatRoom (roomId: number) {
    this.routeNav.navigate(['/room', roomId])
  }
}
