import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing } from './user-management-routing';

/* components */
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { ViewTutorComponent } from './components/view-tutor/view-tutor.component';
import { TutorFilterComponent } from './components/tutor-filter/tutor-filter.component';

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
      UserManagementComponent,
      UsersComponent,
      EditUserComponent,
      TutorsComponent,
      ViewTutorComponent,
      TutorFilterComponent
    ],
    providers: [
      
    ],
    entryComponents: [
      ViewTutorComponent,
      TutorFilterComponent
    ]
})
export class UserManagementModule { }


