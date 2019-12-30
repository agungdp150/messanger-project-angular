import { Component, OnInit, ViewEncapsulation, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
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
  checkID: string;
  myIdCheck: number;
  picture: File = null;
  myPict: File = null;
  previewUrl: any = null;
  error = false;

  displayedColumns = ['no', 'name', 'email', 'userId', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private routeNav: Router,
    public dialogPopup: MatDialog
  ) {
    this.checkID = localStorage.getItem('id');

    // tslint:disable-next-line: radix
    this.myIdCheck = parseInt(this.checkID);
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
      this.dataSource.data = listUsers;
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

  handleAddUser(addUserRoom: NgForm) {
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

  uploadImage(fileInput: any) {
    this.myPict = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    const mimeType = this.myPict.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.myPict);
    // tslint:disable-next-line: variable-name
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.myPict);
    this.userService.myImage(formData).subscribe(
      response => {
        console.log(response);
        alert('Success change picture!');
      },
      error => {
        console.log(error);
        this.error = true;
      }
    );
    setTimeout(() => {
      this.error = false;
    }, 3500);
  }
}
