import { Component, OnInit, Input } from '@angular/core';
import { ListMessage } from 'src/app/model/user.model';


@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.scss']
})
export class ChatSideComponent implements OnInit {

  @Input() sender:ListMessage

  

  constructor(
  ) { }

  ngOnInit() {
    
  }

}
