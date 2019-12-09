import { Component, OnInit, Input } from '@angular/core';
import { ListMessage } from 'src/app/model/user.model';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.scss']
})
export class ChatSideComponent implements OnInit {

  @Input() sender:ListMessage

  today= new Date();
  jstoday = '';

  constructor() {
    this.jstoday = formatDate(this.today, 'hh:mm a', 'en-US', '+0530');
  }

  ngOnInit() {}

}
