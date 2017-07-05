import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class LoginService {

  public apiEndPoint: string = 'users'

  constructor (private http: Http) {}

  public login (credentials: any): Promise<any> {
    let body = JSON.stringify(credentials);
    return this.http.post(`/session/login`, body).toPromise().then(res => res.json()).catch(this.handleError);
  }

  public handleError(error): Promise<any> {
    return Promise.reject(error.message);
  }
}
