import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { StudentsComponent } from './components/students/students.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            { path: '', redirectTo: 'usermanagement', pathMatch: 'full' },
            { path: 'users', component: UsersComponent },
            { path: 'tutors', component: TutorsComponent },
            { path: 'edituser/:id', component: EditUserComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'view/:location/:regno', component: ViewDetailsComponent}            
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);

