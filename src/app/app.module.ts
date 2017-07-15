import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GlobalState, HttpService, AuthService } from './services';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

const APP_PROVIDERS = [
  GlobalState,
  AuthService,
  {
    provide: Http,
    useClass: HttpService
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
