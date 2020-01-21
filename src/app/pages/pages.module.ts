import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { ModalService } from '../shared/services/modal.service';
import { GenericModalComponent } from '../shared/components/generic-modal/generic-modal.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        TypeaheadModule.forRoot(),        
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ],
    providers: [
        ModalService
    ],
    entryComponents: [
        GenericModalComponent
    ]

})
export class PagesModule { }
