import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GlobalService } from '../shared/services/global.service';

import { MenuComponent } from './layouts/menu/menu.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ContentTopComponent } from './layouts/content-top/content-top.component';
import { PagesTopComponent } from './layouts/pages-top/pages-top.component';
import { RightConfigComponent } from './layouts/right-config/right-config.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        GlobalService
    ],
    declarations: [
        MenuComponent,
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        RightConfigComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        RightConfigComponent
    ]
})
export class LayoutModule { }
