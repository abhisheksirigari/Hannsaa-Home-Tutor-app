import { Routes, RouterModule } from '@angular/router';
import { WhyusComponent } from './components/whyus/whyus.component';

const childRoutes: Routes = [
    {
        path: '',
        component: WhyusComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
