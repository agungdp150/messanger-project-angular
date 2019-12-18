import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports : [
    FormsModule,
    RouterModule,
    AlertComponent,
    NavbarComponent,
    LoadingComponent,
    MaterialModule
  ]
})
export class SharedModule { }
