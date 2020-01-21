import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
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

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: "reload"});
