import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './router/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TarefaListComponent } from './pages/tarefa-list/tarefa-list.component';
import { TarefaCreateComponent } from './pages/tarefa-create/tarefa-create.component';
import { TarefaUpdateComponent } from './pages/tarefa-update/tarefa-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarefa-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tarefa-list', component: TarefaListComponent,    canActivate: [AuthGuard]},
  { path: 'tarefa-create', component: TarefaCreateComponent ,canActivate: [AuthGuard]},
  { path: 'tarefa-update/:id', component: TarefaUpdateComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
