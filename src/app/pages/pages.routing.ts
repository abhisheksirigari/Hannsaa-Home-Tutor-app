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
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            { path: 'actions', loadChildren: './actions/actions.module#ActionsModule' },
            { path: 'messages', loadChildren: './messages/messages.module#MessagesModule' },            
            { path: 'generalfaqs', loadChildren: './faq/faq.module#FaqModule' },
            { path: 'termsandconditions', loadChildren: './termsandconditions/termsandconditions.module#TermsandconditionsModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule' },
            { path: 'whyUs', loadChildren: './why-us/why-us.module#WhyUsModule' },
            { path: 'howitworks', loadChildren: './how-it-works/how-it-works.module#HowItWorksModule' },            
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'categeories', loadChildren: './categeories/categeories.module#CategeoriesModule' },
            { path: 'students', loadChildren: './students/students.module#StudentsModule' },
            { path: 'usermanagement', loadChildren: './user-management/user-management.module#UserManagementModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
