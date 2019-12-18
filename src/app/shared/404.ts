import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h4 style="margin-top: 100px; text-align: center;">Page Not Found</h4>

  <p style="text-align: center;"><a [routerLink]="['/']">Agung's Home Page</a></p>`,
})

export class NotFoundComponent { }
