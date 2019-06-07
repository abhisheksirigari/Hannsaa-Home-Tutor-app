import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MessagesComponent } from './components/messages/messages.component';
import { routing } from './messages.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
      MessagesComponent
    ],
    entryComponents: [
        
    ]
})
export class MessagesModule { }

