import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() myMessage: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: variable-name
  room_id: number;
  content: string;

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit() {}

  sendText(message: NgForm) {
    this.routeActive.params.subscribe(params => {
      const idRoom = params.id;
      // tslint:disable-next-line: radix
      this.room_id = parseInt(idRoom);
    });

    message.value.room_id = this.room_id;
    this.room_id = message.value.room_id;
    const content = message.value.content;

    const textSend = {
      room_id: this.room_id,
      content
    };

    this.myMessage.emit(textSend);

    message.reset();
  }

  handleSendText(event) {
    if (event.keyCode === 13) {
      // tslint:disable-next-line: no-unused-expression
      this.sendText;
    }
  }
}
