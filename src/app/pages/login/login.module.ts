import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from 'app/services/auth/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class LoginModule { }
