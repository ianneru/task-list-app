import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticationGuard } from './authentication-guard.service';
import {  Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getTokenUser()
    });

    private headersNoLogged = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(
		private http: HttpClient,
		private auth: AuthenticationGuard,
		private router: Router,
    ) {
        this.auth.setToken({"Token" : { "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjExNDM3OTY1LCJleHAiOjE2MTE0NDUxNjUsImlhdCI6MTYxMTQzNzk2NX0.FPcv_XNkhlAYkexb11GTLz-z5xyOJSiSajuplblGPQE" } });
    }

    get(
		urlAPI: string,
		logado: boolean = true
	): Promise<any> {
		var token = this.auth.getTokenUser();

		this.headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		});

		var url = environment.urlApi;

		if (urlAPI.substring(0, 4) == 'http') {
			url = '';
		}

		return this.http
			.get(url + urlAPI, { headers: logado ? this.headers : this.headersNoLogged })
			.pipe(
				map((objectRetorno) => {
					return objectRetorno;
				})
			)
			.toPromise()
			.catch((error) => {
				//Verifica se a sessão do usuário expirou
				// if (error.status == 403) {
				// 	this.showTypeAlert('ATENCAO', 'Sua sessão expirou. Faça o login novamente.');
				// 	if (environment.production) {
				// 		this.router.navigate([ '/login' ]);
				// 	}
				// } else if (error.status == 401) {
				// 	this.showTypeAlert('ATENCAO', 'Você não está autorizado a acessar este recurso.');
				// 	this.router.navigate([ '/error' ], { queryParams: { code: error.status } });
				// } else {
				// 	// if (this._config.config.Local != 'dev') {
				// 	this.router.navigate([ '/error' ], { queryParams: { code: error.status } });
				// 	//  }
				// }
				//document.getElementById('myNav').style.width = '0%';
			});
    }
    
    post(
		objectSend: any,
		urlAPI: string,
		carregarLoading: boolean = true,
		retornarObjeto: boolean = false,
		logado: boolean = true,
		exibirMsg: boolean = true
	): Promise<any> {

        this.headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + this.auth.getTokenUser()
		});

		const header = logado ? this.headers : this.headersNoLogged;
		let url = environment.urlApi;

		if (urlAPI.substring(0, 4) == 'http') {
			url = '';
		}

		return this.http
			.post(url + urlAPI, objectSend, { headers: header })
			.pipe(
				map((objectRetorno) => {
						return objectRetorno;	
				})
			)
			.toPromise()
			.catch((err: HttpErrorResponse) => {
				// this.alertService.danger('Ocorreu um erro inesperado. Tente novamente em instantes.')
				// if (environment.production) {
				// 	this.router.navigate([ '/login' ]);
				// }
			});
    }
    

    delete(
		urlAPI: string,
		logado: boolean = true,
	): Promise<any> {

        this.headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + this.auth.getTokenUser()
		});

		const header = logado ? this.headers : this.headersNoLogged;
		let url = environment.urlApi;

		if (urlAPI.substring(0, 4) == 'http') {
			url = '';
		}

		return this.http
			.delete(url + urlAPI, { headers: header })
			.pipe(
				map((objectRetorno) => {
						return objectRetorno;	
				})
			)
			.toPromise()
			.catch((err: HttpErrorResponse) => {
				// this.alertService.danger('Ocorreu um erro inesperado. Tente novamente em instantes.')
				// if (environment.production) {
				// 	this.router.navigate([ '/login' ]);
				// }
			});
	}
}

