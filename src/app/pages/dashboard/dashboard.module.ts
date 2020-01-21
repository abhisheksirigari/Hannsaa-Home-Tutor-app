import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

import { routing } from './dashboard.routing';
import { DashboardRootComponent } from './components/dashboard-root/dashboard-root.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { ViewStudentEnquiryComponent } from './components/view-student-enquiry/view-student-enquiry.component';
import { TutorDatatableComponent } from './components/tutor-datatable/tutor-datatable.component';
import { TutorDatatableFilterComponent } from './components/tutor-datatable-filter/tutor-datatable-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalModule, TypeaheadModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfigService } from '../../shared/services/config.service';
import { ViewTutorDetailsComponent } from './components/view-tutor-details/view-tutor-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot(),   
    NgxPaginationModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    DashboardRootComponent,
    StudentDashboardComponent,
    TutorDashboardComponent,
    ViewStudentEnquiryComponent,
    TutorDatatableComponent,
    TutorDatatableFilterComponent,
    ViewTutorDetailsComponent    
  ],
  providers: [
    ConfigService
  ],
  exports: [
    
  ],
  entryComponents: [
    ViewStudentEnquiryComponent,
    TutorDatatableFilterComponent
  ]
})
export class DashboardModule { }




