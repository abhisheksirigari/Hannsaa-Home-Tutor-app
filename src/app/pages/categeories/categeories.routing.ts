import { Routes, RouterModule } from '@angular/router';
import { CategeoriesComponent } from './components/categeories/categeories.component';
import { ClassCategoriesComponent } from './components/class-categories/class-categories.component';
import { SubjectCategoriesComponent } from './components/subject-categories/subject-categories.component';

const childRoutes: Routes = [
  {
    path: '',
    component: CategeoriesComponent,
    children: [
      { path: '', redirectTo: 'class-categeories', pathMatch: 'full' },
      { path: 'class-categeories', component: ClassCategoriesComponent },
      { path: 'subject-categeories', component: SubjectCategoriesComponent }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
