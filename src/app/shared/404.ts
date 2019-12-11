import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h4 class="text-sm-center" style="margin-top: 100px;">Page Not Found</h4>

  <p class="text-sm-center"><a [routerLink]="['/user/login']">Agung's Home Page</a></p>`,
})

export class NotFoundComponent { }
