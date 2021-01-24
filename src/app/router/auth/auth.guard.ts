import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log(`canActivate `);
        
        const currentUser = this.authenticationService.currentUserValue;
        
        if (currentUser && currentUser.usuario) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;
    }
}