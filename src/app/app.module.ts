import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefaListComponent } from './pages/tarefa-list/tarefa-list.component';
import { TarefaCreateComponent } from './pages/tarefa-create/tarefa-create.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from './services/authentication-guard.service';
import { environment } from 'environments/environment';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListComponent,
    TarefaCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'tarefa-list', pathMatch: 'full' },
      { path: 'tarefa-list', component: TarefaListComponent },
      { path: 'tarefa-create', component: TarefaCreateComponent }
    ]),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthenticationGuard,
              { provide: 'env', useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
