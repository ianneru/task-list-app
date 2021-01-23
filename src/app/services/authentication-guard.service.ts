import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

export class AuthenticationGuard implements CanActivate {

    constructor(

  
    ) {
    }
    param2: string;
  
    token: any = "";
  
    canActivate(): boolean {
      // localStorage.removeItem("_negociacao");
      // if (!this.storage.EstaLogado()) {
      //   this.router.navigate(['/perfil']);
      // } else {
        return true;
  
      // }
    }
  
    getTokenUser(): string {
      
      if (localStorage.getItem("userlogg") != null) {
        this.token = JSON.parse(localStorage.getItem("userlogg")).Token.access_token;
      }  
      return this.token;
    }
  
    setToken(user): void {
      localStorage.setItem("userlogg", JSON.stringify(user));
    }
    
  }
  