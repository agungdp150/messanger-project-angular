import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector ) { }

  intercept(req, next) {
    const authToken = this.injector.get(AuthService);
    const tokenRequest = req.clone({
      setHeaders : {
        Authorization : `Bearer ${authToken.handleGetToken()}`
      }
    });
    return next.handle(tokenRequest);
  }
}
