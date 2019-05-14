import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GlobalService } from '../shared/services/global.service';

import { LoadingComponent } from '../shared/components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentTopComponent } from './components/content-top/content-top.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { RightConfigComponent } from './components/right-config/right-config.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
        LoadingComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        RightConfigComponent,
        LoadingComponent
    ]
})
export class LayoutModule { }
