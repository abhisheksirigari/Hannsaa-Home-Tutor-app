import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const childRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
