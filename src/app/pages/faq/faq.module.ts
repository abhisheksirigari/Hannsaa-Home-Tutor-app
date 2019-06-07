import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { routing } from './faq.routing';

/* components */
import { FaqComponent } from './components/faq/faq.component';
import { StudentFaqComponent } from './components/student-faq/student-faq.component';
import { TeacherFaqComponent } from './components/teacher-faq/teacher-faq.component';
import { AddFaqComponent } from './components/add-faq/add-faq.component';
import { EditFaqComponent } from './components/edit-faq/edit-faq.component';
import { GeneralFaqComponent } from './components/general-faq/general-faq.component';
import { FaqService } from '../../shared/services/faq.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    FaqComponent,
    StudentFaqComponent,
    TeacherFaqComponent,
    AddFaqComponent,
    EditFaqComponent,
    GeneralFaqComponent
  ],
  entryComponents: [
    AddFaqComponent,
    EditFaqComponent
  ],
  providers: [
    FaqService
  ]
})
export class FaqModule { }

