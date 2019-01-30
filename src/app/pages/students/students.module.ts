import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing } from './students-routing';

/* components */
import { StudentComponent } from './student.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassCategoriesComponent } from './components/class-categories/class-categories.component';
import { SubjectCategoriesComponent } from './components/subject-categories/subject-categories.component';
import { EditClassCategoryComponent } from './components/edit-class-category/edit-class-category.component';

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
        StudentComponent,
        StudentsComponent,
        ClassCategoriesComponent,
        SubjectCategoriesComponent,
        EditClassCategoryComponent
    ],
    providers: [
      
    ]
})
export class StudentsModule { }

