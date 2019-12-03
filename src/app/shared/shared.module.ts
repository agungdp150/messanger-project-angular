import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { SidenavComponent } from '../components/layout/sidenav/sidenav.component';



@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    SidenavComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports : [
    FormsModule,
    RouterModule,
    AlertComponent,
    NavbarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
