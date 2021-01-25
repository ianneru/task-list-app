import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    
    this.authenticationService.logout();

    window.location.reload();
  }
}
