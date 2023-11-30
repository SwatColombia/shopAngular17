import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'header',
    loadComponent: () => import('./shared/components/header/header.component'),
    children: [
    ]
  },
{
path: '',
redirectTo:'/header',
pathMatch: 'full'
}


];
