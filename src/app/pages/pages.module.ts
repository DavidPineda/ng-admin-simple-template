import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  providers: [
    {
      provide: Http,
      useClass: HttpService
    }
  ],
  declarations: [
    Pages
  ]
})
export class PagesModule {
}
