import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector : Injector ) { }

  intercept(req, next) {
    let authToken = this.injector.get(AuthService)
    let tokenRequest = req.clone({
      setHeaders : {
        Authorization : `Bearer ${authToken.handleGetToken()}` 
      }
    })
    return next.handle(tokenRequest);
  }
}
