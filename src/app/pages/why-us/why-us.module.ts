import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './whyus.routing';
import { WhyusComponent } from './components/whyus/whyus.component';
import { EditWhyusComponent } from './components/edit-whyus/edit-whyus.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
      WhyusComponent, 
      EditWhyusComponent
    ],
    entryComponents: [
      EditWhyusComponent        
    ]
})
export class WhyUsModule { }

