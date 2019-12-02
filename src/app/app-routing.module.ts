import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyChatComponent } from './components/room-chat/my-chat/my-chat.component';
import { NotFoundComponent } from './404';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/user/login',
    pathMatch : 'full'
  },
  {
    path : 'user',
    loadChildren : './components/user/user.module#UserModule'
  },
  {
    path : '',
    component : MyChatComponent
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
