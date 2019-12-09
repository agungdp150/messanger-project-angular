import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { ListMessage } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class RoomChatService {

  private memberList = "/api/members/"
  private myMessage = "/api/messages"
  private sendMessage = "/api/messages"

  constructor(private http: HttpClient) { }

  // Get Member Room
  getMember(roomId : number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.memberList}/${roomId}`, 
      httpOptions
    );
  }

  // Get Message
  getMessage(roomId : number): Observable<ListMessage[]>{
    return this.http.get<ListMessage[]>(
      `${this.myMessage}/${roomId}`,
      httpOptions
    )
  }

  // handleSendMessage
  handleSend (textSend : ListMessage): Observable<ListMessage>{
    return this.http.post<ListMessage>(
      this.sendMessage, textSend, httpOptions
    );
  }
}