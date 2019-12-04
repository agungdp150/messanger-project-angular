import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable()
export class UserService {

  private userApi = "/api/users";

  constructor(private http : HttpClient) { }

  // Get all user
  getUserList (): Observable<User[]> {
    return this.http.get<User[]>(this.userApi);

  }
}
