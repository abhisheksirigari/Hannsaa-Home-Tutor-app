import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { routing } from './privacy-policy.routing';
import { EditPrivacyPolicyComponent } from './components/edit-privacy-policy/edit-privacy-policy.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
      PrivacyPolicyComponent,
      EditPrivacyPolicyComponent
    ],
    entryComponents: [
      EditPrivacyPolicyComponent
    ]
})
export class PrivacyPolicyModule { }

