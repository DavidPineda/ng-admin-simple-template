import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

// Application wide providers
const APP_PROVIDERS = [
  // AppState,
  GlobalState
];

// export type StoreType = {
//   state: InternalStateType,
//   restoreInputValues: () => void,
//   disposeOldHosts: () => void
// };

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
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
