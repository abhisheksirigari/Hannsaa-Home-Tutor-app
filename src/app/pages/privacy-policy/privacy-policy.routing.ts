import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PrivacyPolicyComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
