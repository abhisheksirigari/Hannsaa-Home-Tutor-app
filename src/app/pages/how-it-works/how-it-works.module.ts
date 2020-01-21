import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { routing } from './howitworks.routing';
import { EditHowItWorksComponent } from './components/edit-how-it-works/edit-how-it-works.component';
import { StudentHowItWorksComponent } from './components/student-how-it-works/student-how-it-works.component';
import { TutorHowItWorksComponent } from './components/tutor-how-it-works/tutor-how-it-works.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    HowItWorksComponent,
    EditHowItWorksComponent,
    StudentHowItWorksComponent,
    TutorHowItWorksComponent
  ],
  entryComponents: [
    EditHowItWorksComponent
  ]
})
export class HowItWorksModule { }

