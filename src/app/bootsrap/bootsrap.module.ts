import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Bootsrap component
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({

  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports : [
    ModalModule,
    CollapseModule,
    TabsModule
  ]
})
export class BootsrapModule { }
