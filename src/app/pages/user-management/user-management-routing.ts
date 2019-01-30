import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            { path: '', redirectTo: 'usermanagement', pathMatch: 'full' },
            { path: 'users', component: UsersComponent },
            { path: 'edituser/:id', component: EditUserComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);

