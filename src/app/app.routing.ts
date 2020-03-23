import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
		path: "**",
		redirectTo: "/login"
	}
  // { component: LoginComponent, path: "**", redirectTo: 'login' }
  // {
  //   path: '**',
  //   component: LoginComponent
  //   // redirectTo: 'pages/dashboard'
  // }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
