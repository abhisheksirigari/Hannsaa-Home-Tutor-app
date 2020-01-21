import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { DashboardRootComponent } from './components/dashboard-root/dashboard-root.component';
import { ViewStudentEnquiryComponent } from '../../shared/components/view-student-enquiry/view-student-enquiry.component';
import { MailBoxComponent } from '../../shared/components/mail-box/mail-box.component';
import { ViewTutorDetailsComponent } from './components/view-tutor-details/view-tutor-details.component';

const childRoutes: Routes = [
    {
        path: '',
        component: DashboardRootComponent,
        children: [
            { path: '', redirectTo: 'student', pathMatch: 'full' },
            { path: 'student', component: StudentDashboardComponent },
            { path: 'tutor', component: TutorDashboardComponent },
            { path: 'student/view/:seqId', component: ViewStudentEnquiryComponent },
            { path: 'student/mail', component: MailBoxComponent },
            { path: 'tutor/view/:id', component: ViewTutorDetailsComponent }        
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
