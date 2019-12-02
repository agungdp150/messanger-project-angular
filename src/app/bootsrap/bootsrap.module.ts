import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Bootsrap component
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({

  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports : [
    ModalModule,
    CollapseModule,
  ]
})
export class BootsrapModule { }
