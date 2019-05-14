import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'pages/index',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'pages/index'
  // }  
  { 
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/dashboard'
  }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
