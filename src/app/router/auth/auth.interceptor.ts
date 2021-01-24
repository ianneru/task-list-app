import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthService);
    
    if(req.url.indexOf('Authentication') > 0)
        return next.handle(req);
    
    const authHeader = `Bearer ${auth.currentUserValue.token}`;
    
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader),
    
    });
    
    return next.handle(authReq);
  }
}

export const AuthHttpInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};