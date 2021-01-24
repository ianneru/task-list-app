// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { environment } from '../../../environments/environment';
// import { AuthService } from '../../services/auth/auth.service';

// @Injectable()
// export class AuthJwtInterceptor implements HttpInterceptor {
//     constructor(private authenticationService: AuthService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const currentUser = this.authenticationService.currentUserValue;
//         const isLoggedIn = currentUser && currentUser.token;
//         const isApiUrl = request.url.startsWith(environment.urlApi);

//         console.log(`intercept Jwt : ${currentUser},${isLoggedIn},${isApiUrl}`);

//         if (isLoggedIn && isApiUrl) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${currentUser.token}`
//                 }
//             });
//         }

//         return next.handle(request);
//     }
// }