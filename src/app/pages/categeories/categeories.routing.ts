import { Routes, RouterModule } from '@angular/router';
import { CategeoriesComponent } from './components/categeories/categeories.component';

const childRoutes: Routes = [
  {
      path: '',
      component: CategeoriesComponent,
      children: [
          { path: '', redirectTo: 'default-tables', pathMatch: 'full' }
      ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
