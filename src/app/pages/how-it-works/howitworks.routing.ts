import { Routes, RouterModule } from '@angular/router';
import { StudentHowItWorksComponent } from './components/student-how-it-works/student-how-it-works.component';
import { TutorHowItWorksComponent } from './components/tutor-how-it-works/tutor-how-it-works.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HowItWorksComponent,
    children: [
      { path: '', redirectTo: 'howitworks/student', pathMatch: 'full' },
      { path: 'student', component: StudentHowItWorksComponent },
      { path: 'tutor', component: TutorHowItWorksComponent }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
