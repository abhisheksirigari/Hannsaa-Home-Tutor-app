import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'students', loadChildren: './students/students.module#StudentsModule' },
            { path: 'usermanagement', loadChildren: './user-management/user-management.module#UserManagementModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
