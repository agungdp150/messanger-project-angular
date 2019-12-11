import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ListMessage } from 'src/app/model/user.model';

@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.scss']
})
export class ChatSideComponent implements OnInit {
  @Input() sender: ListMessage;
  @ViewChild('scrollDown', {static : false}) private myScroll: ElementRef;

  userId: string;
  myIdCheck: number;

  constructor() {

    this.userId = localStorage.getItem('id');
    this.myIdCheck = parseInt(this.userId);

  }

  ngOnInit() {
     this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
        this.myScroll.nativeElement.scrollTop = this.myScroll.nativeElement.scrollHeight;
    } catch (err) { }
}
}
