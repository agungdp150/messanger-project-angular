import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProtectNavGuard implements CanActivate {

  constructor(private authService: AuthService, private routeNavigate: Router) {}

  canActivate(): boolean {
    if (this.authService.handleProtectPage()) {
      return true;
    } else {
      this.routeNavigate.navigate(['/user/login']);
      return false;
    }
  }
}
