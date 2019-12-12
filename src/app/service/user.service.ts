import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApi = '/api/users';
  private myRoom = '/api/rooms';
  private addUser = '/api/members';
  private detailUser = '/api/users';
  private uploadImage = '/api/userpict';

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
  // tslint:disable-next-line: variable-name
  handleNewRoom(room_name: string): Observable<any> {
    return this.http.post<any>(
      this.myRoom,
      {
        room_name
      },
      httpOptions
    );
  }

  // Add User
  // tslint:disable-next-line: variable-name
  handleAddUser(room_id: number, user_id: number ): Observable<any[]> {
    return this.http.post<any>(this.addUser, {
      room_id,
      user_id
    }, httpOptions);
  }

  // Detail User
  getDetailUser(idUser: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.detailUser}/${idUser}`,
      httpOptions);
  }

  // handleUpload Image
  myImage(file): Observable<any> {
    return this.http.post<any>(
      this.uploadImage, file
    );
  }
}
