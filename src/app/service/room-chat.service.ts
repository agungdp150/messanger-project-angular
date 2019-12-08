import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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
  getMessage(roomId : number): Observable<any[]>{
    return this.http.get<any[]>(
      `${this.myMessage}/${roomId}`,
      httpOptions
    )
  }

  // handleSendMessage
  handleSend (room_id : number, content : string): Observable<any>{
    return this.http.post<any>(
      this.sendMessage, {
        room_id : room_id,
        content : content
      }, httpOptions
    );
  }
}
