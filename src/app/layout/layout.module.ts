import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GlobalService } from '../shared/services/global.service';

import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentTopComponent } from './components/content-top/content-top.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { RightConfigComponent } from './components/right-config/right-config.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        BsDropdownModule.forRoot()
    ],
    providers: [
        GlobalService
    ],
    declarations: [
        MenuComponent,
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        RightConfigComponent,
        BreadcrumbComponent
    ],
    exports: [
        SidebarComponent,
        BreadcrumbComponent,
        PagesTopComponent,
        ContentTopComponent,
        RightConfigComponent,
    ]
})
export class LayoutModule { }
