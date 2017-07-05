import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'sigin', pathMatch: 'full' },
  { path: '**', redirectTo: 'sigin' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
