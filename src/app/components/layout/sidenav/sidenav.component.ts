import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  users : User[];

  constructor() { }

  ngOnInit() {
  }

}
