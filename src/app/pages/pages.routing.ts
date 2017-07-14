import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'sigin', pathMatch: 'full' },
  {
    path: 'sigin',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'sigup',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'recover',
    loadChildren: './recover/recover.module#RecoverModule'
  },
  {
    path: 'reset/:id',
    loadChildren: './reset/reset.module#ResetModule'
  },
  {
    path: '',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
