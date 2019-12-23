import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/404';
import { ProtectNavGuard } from './service/protect-nav.guard';
import { RoomResolverService } from './components/room-chat/room-resolver.service';


const routes: Routes = [
  {
    path : '',
    loadChildren : './components/home/home.module#HomeModule'
  },
  {
    path : 'user',
    loadChildren : './components/user/user.module#UserModule'
  },
  {
    path : 'room/:id',
    loadChildren : './components/room-chat/room-chat.module#RoomChatModule',
    canActivate : [ProtectNavGuard],
    // resolve : {myMessageList : RoomResolverService}
  },


  // all non-existing routing goes to 404 page
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Page Not Found'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
