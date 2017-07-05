import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'sigin',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'sigup',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'recover',
    loadChildren: 'app/pages/recover/recover.module#RecoverModule'
  },
  {
    path: 'reset/:id',
    loadChildren: 'app/pages/reset/reset.module#ResetModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
