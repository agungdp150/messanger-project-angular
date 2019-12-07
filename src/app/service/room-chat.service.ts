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

  constructor(private http: HttpClient) { }

  // Get Member Room
  getMember(roomId : number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.memberList}/${roomId}`, 
      httpOptions
    );
  }
}
