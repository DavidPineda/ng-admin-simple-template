import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class LoginService {

  public apiEndPoint: string = 'users'

  constructor (private http: Http) {}

  public async login (credentials: any): Promise<any> {
    let body = JSON.stringify(credentials);
    try {
      let response = await this.http.post(`${this.apiEndPoint}/login`, body).toPromise();
      return response.json();
    }
    catch (e) {
      throw e;
    }
  }

}
