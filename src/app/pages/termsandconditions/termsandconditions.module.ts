import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { StudentTermsConditionsComponent } from './components/student-terms-conditions/student-terms-conditions.component';
import { TeacherTermsConditionsComponent } from './components/teacher-terms-conditions/teacher-terms-conditions.component';
import { EditTermsConditionsComponent } from './components/edit-terms-conditions/edit-terms-conditions.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

import { routing } from './termsandconditions.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    StudentTermsConditionsComponent, 
    TeacherTermsConditionsComponent, 
    EditTermsConditionsComponent, 
    TermsConditionsComponent
  ],
  entryComponents: [
    EditTermsConditionsComponent
  ]
})
export class TermsandconditionsModule { }
