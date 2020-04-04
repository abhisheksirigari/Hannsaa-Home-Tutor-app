import { Routes, RouterModule } from '@angular/router';
import { MetadataComponent } from './components/metadata/metadata.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MetadataComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
