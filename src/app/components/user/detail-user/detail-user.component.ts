import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  users: User[];

  constructor(
    private routeActive : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.users = this.routeActive.snapshot.data.users;
  }

}
