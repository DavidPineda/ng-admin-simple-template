import { Routes, RouterModule }  from '@angular/router';
import { Recover } from './recover.component';

const routes: Routes = [
  {
    path: '',
    component: Recover
  }
];

export const routing = RouterModule.forChild(routes);
