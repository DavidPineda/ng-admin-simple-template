import { Routes, RouterModule } from '@angular/router';
import { Reset } from './reset.component';

const routes: Routes = [
  {
    path: '',
    component: Reset
  }
];

export const routing = RouterModule.forChild(routes);
