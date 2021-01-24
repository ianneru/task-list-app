import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';

import { _throw as throwError } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(Tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.post<Tarefa>(`${environment.urlApi}Tarefa`, JSON.stringify(Tarefa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getById(id: string): Observable<Tarefa> {
    return this.httpClient.get(`${environment.urlApi}Tarefa/${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(`${environment.urlApi}Tarefa`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(Tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.put<Tarefa>(`${environment.urlApi}Tarefa`, JSON.stringify(Tarefa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.urlApi}Tarefa/${id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  count() {
    return this.httpClient.get<number>(`${environment.urlApi}Tarefa/count`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    debugger;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
