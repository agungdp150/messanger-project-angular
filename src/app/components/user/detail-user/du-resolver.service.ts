import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';


@Injectable({
  providedIn :'root'
})
export class DetaiUserResolverService implements Resolve<User[]>{

  private id : string;

  constructor(private detailUser : UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.detailUser.getDetailUser(route.paramMap.get('id'));
  }
  
}  
