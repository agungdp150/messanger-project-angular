import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { SidenavComponent } from '../components/layout/sidenav/sidenav.component';
import { BootsrapModule } from '../bootsrap/bootsrap.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    SidenavComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BootsrapModule,
  ],
  exports : [
    FormsModule,
    RouterModule,
    AlertComponent,
    NavbarComponent,
    LoadingComponent,
    SidenavComponent,
    BootsrapModule,
  ]
})
export class SharedModule { }
