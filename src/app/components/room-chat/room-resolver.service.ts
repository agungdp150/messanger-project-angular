import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ListMessage } from 'src/app/model/user.model';
import { Observable } from 'rxjs';
import { RoomChatService } from 'src/app/service/room-chat.service';


@Injectable({
  providedIn :'root'
})
export class RoomResolverService implements Resolve<ListMessage[]>{

  private id : string;

  constructor(private myMessageService : RoomChatService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ListMessage[]> | Promise<ListMessage[]> | ListMessage[]{
    return this.myMessageService.getMessage(route.paramMap.get('id'));
  }    
}
