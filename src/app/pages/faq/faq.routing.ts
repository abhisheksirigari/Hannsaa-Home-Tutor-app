import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { StudentFaqComponent } from './components/student-faq/student-faq.component';
import { TeacherFaqComponent } from './components/teacher-faq/teacher-faq.component';
import { GeneralFaqComponent } from './components/general-faq/general-faq.component';

const childRoutes: Routes = [
  {
    path: '',
    component: FaqComponent,
    children: [
      { path: '', redirectTo: 'generalfaqs', pathMatch: 'full' },
      { path: 'generalfaqs', component: GeneralFaqComponent },
      { path: 'studentfaqs', component: StudentFaqComponent },
      { path: 'teacherfaqs', component: TeacherFaqComponent }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
