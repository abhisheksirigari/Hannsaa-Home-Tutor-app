import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AboutusComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
