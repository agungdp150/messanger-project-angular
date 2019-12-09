import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  @Output() myMessage: EventEmitter<any> = new EventEmitter();

  room_id: number;
  content: string;

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit() {}

  sendText(message: NgForm) {
    this.routeActive.params.subscribe(params => {
      let idRoom = params["id"];
      this.room_id = parseInt(idRoom);
    });

    message.value.room_id = this.room_id;
    this.room_id = message.value.room_id;
    let content = message.value.content;

    let textSend = {
      room_id: this.room_id,
      content: content
    };

    this.myMessage.emit(textSend);

    message.reset();
  }

  handleSendText(event) {
    if (event.keyCode === 13) {
      this.sendText;
    }
  }
}
