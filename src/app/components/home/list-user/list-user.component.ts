import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users:User[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(listUsers => {
      this.users = listUsers;
    });
  }

}
