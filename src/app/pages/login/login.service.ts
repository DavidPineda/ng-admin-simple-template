import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  public apiEndPoint: string = 'users'

  constructor(private http: Http) {}

  public login(credentials:any): Observable<Response> {
    let body = JSON.stringify(credentials);
    return this.http.post(`${this.apiEndPoint}/login`, body);
  }
}
