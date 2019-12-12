import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  users: User[];
  picture: File = null;
  myPict: File = null;
  previewUrl: any = null;
  error = false;
  userID: string;
  myIdCheck: number;

  constructor(
    private routeActive: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.users = this.routeActive.snapshot.data.users;
    this.picture = this.routeActive.snapshot.data.users.profile_picture;
    this.userID = localStorage.getItem('id');
    // tslint:disable-next-line: radix
    this.myIdCheck = parseInt(this.userID);
    // console.log(this.users);
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
    reader.onload = (_event) => {
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
      }, error => {
        console.log(error);
        this.error = true;
      }
    );
    setTimeout(() => {
      this.error = false;
    }, 3500);
  }
}





