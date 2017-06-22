import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';

@Injectable()

export class HttpService extends Http {

  public apiUrl: string = 'http://localhost:3000/api/';
  private authorization = '';

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  /**
   * Rewrites de base method and performs common actions with every request
   * The current request may be a string or an object
   * If it is astring it should have options
   * */
  request(request: string | Request, options: RequestOptionsArgs = { headers: new Headers() }): Observable<Response> {
    this.configureRequest(request, options);
    return this.interceptResponse(request, options);
  }

  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    if (typeof request === 'string') {
      request = this.getUrl(request);
      this.setHeaders(options);
    } else {
      request['url'] = this.getUrl(request['url']);
      this.setHeaders(request);
    }
  }

  private interceptResponse(request: string | Request, options: RequestOptionsArgs): Observable<Response> {
    const observableRequest = super
      .request(request, options)
      .catch(this.onCatch())
      .finally(this.onFinally());
    return observableRequest;
  }

  private getUrl(currentUrl) {
    if (!currentUrl.includes('/assets/'))
      return this.apiUrl + currentUrl;
    return currentUrl;
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const headers = objectToSetHeadersTo.headers;
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', this.authorization);
  }

  private onCatch() {
    return (res: Response) => {
      if (this.esErrorDeSeguridad(res)) {
        this.router.navigate(['pages/login']);
      }
      return Observable.throw(res);
    };
  }

  private esErrorDeSeguridad(res) {
    return res.status === 401 || res.status === 403 || res.status === 419;
  }

  private onFinally() {
    return () => console.log('request end');
  }

}
