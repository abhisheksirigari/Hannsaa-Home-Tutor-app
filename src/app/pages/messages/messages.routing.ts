import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MessagesComponent,
        data: { bc: "Im in Messages" }
    }
];

export const routing = RouterModule.forChild(childRoutes);
