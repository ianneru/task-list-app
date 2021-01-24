import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefaListComponent } from './pages/tarefa-list/tarefa-list.component';
import { TarefaCreateComponent } from './pages/tarefa-create/tarefa-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'environments/environment';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './router/auth/auth.interceptor';
//import { AuthJwtInterceptor } from './router/auth/auth-jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';
import { TarefaService } from './services/tarefa/tarefa.service';
import { AuthGuard } from './router/auth/auth.guard';
import { TarefaUpdateComponent } from './pages/tarefa-update/tarefa-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListComponent,
    TarefaCreateComponent,
    HeaderComponent,
    LoginComponent,
    TarefaUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: 'env', useValue: environment },
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
              //{ provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true },
              AuthService,
              TarefaService,
              AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
