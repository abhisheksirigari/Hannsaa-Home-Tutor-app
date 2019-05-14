import { Routes, RouterModule } from '@angular/router';

import { ActionsComponent } from './components/actions/actions.component';

const childRoutes: Routes = [
  {
    path: '',
    component: ActionsComponent,
    children: [
      { path: '', redirectTo: 'actions', pathMatch: 'full' },
      { path: 'actions', component: ActionsComponent }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
