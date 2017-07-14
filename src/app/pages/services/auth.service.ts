import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService implements CanActivate {

  private apiEndPoint: string = 'auth';

  constructor (private http: Http, private router: Router) {}

  // Valida que la sesion de usuario este activa para poder recorrer la aplicacion
  public async canActivate() {
    let user = await this.http.get(`${this.apiEndPoint}/whoami`).toPromise().then(res => res.json()).catch(this.handleError);
    if (!user.id) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  public login (credentials: any): Promise<any> {
    let body = JSON.stringify(credentials);
    return this.http.post(`${this.apiEndPoint}/login`, body).toPromise().then(res => res.json()).catch(this.handleError);
  }

  public handleError(error): Promise<any> {
    return Promise.reject(error.message);
  }
}
