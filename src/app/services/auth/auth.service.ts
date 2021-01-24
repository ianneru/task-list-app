import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth } from './auth.model';

@Injectable()
export class AuthService {

    private currentUserSubject: BehaviorSubject<Auth>;

    public currentUser: Observable<Auth>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Auth {
        console.log(`Current User Value :  ${this.currentUserSubject.value}`);
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

        console.log(`Login :  ${username},${password}`);

        return this.http.post(`${environment.urlApi}Authentication`, { username, password })
            .pipe(map(User => {

                localStorage.setItem('currentUser', JSON.stringify(User));
                
                this.currentUserSubject.next(User as Auth);
                
                return User;
            }))          
            ;
  
    }

    logout() {
        
        console.log(`Logout`);

        localStorage.removeItem('currentUser');

        this.currentUserSubject.next(null);
    }

   
}