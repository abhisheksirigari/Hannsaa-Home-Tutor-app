import { Routes, RouterModule } from '@angular/router';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { TeacherTermsConditionsComponent } from './components/teacher-terms-conditions/teacher-terms-conditions.component';
import { StudentTermsConditionsComponent } from './components/student-terms-conditions/student-terms-conditions.component';

const childRoutes: Routes = [
  {
    path: '',
    component: TermsConditionsComponent,
    children: [
      { path: '', redirectTo: 'termsandconditions', pathMatch: 'full' },
      { path: 'studentterms', component: StudentTermsConditionsComponent },
      { path: 'teacherterms', component: TeacherTermsConditionsComponent }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
