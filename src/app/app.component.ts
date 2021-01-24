import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './services/auth/auth.model';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentViewer: Auth;

  constructor(
      private router: Router,
      private authenticationService: AuthService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentViewer = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
