import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { HttpService, AuthService } from './services';

const APP_PROVIDERS = [
  {
    provide: Http,
    useClass: HttpService
  },
  AuthService
]

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  declarations: [
    Pages
  ]
})
export class PagesModule {
}
