import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../model/user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userApi = "/api/users";
  private myRoom = "/api/rooms";
  private addUser = "/api/members";

  constructor(private http: HttpClient) {}

  // Get all user
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.userApi, httpOptions);
  }

  // Get rooms
  getRoomList(): Observable<any[]> {
    return this.http.get<any>(this.myRoom, httpOptions);
  }

  // New Room
  handleNewRoom(myRoom1) : Observable<any>{
    return this.http.post<any>(this.myRoom, myRoom1, httpOptions);
  }

  // Add User
  handleAddUser(addUser1) : Observable<any[]>{
    return this.http.post<any>(this.addUser, addUser1, httpOptions);
  }

}
