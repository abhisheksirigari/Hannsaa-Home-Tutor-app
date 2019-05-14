import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { routing } from './categeories.routing';
/* components */
import { CategeoriesComponent } from './components/categeories/categeories.component';
import { AddClassToCategoryComponent } from './components/add-class-to-category/add-class-to-category.component';
import { AddSubjectToCategoryComponent } from './components/add-subject-to-category/add-subject-to-category.component';
import { EditClassToCategoryComponent } from './components/edit-class-to-category/edit-class-to-category.component';
import { EditSubjectToCategoryComponent } from './components/edit-subject-to-category/edit-subject-to-category.component';
import { ClassCategoriesComponent } from './components/class-categories/class-categories.component';
import { SubjectCategoriesComponent } from './components/subject-categories/subject-categories.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

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
    CategeoriesComponent,
    AddClassToCategoryComponent,
    AddSubjectToCategoryComponent,
    EditClassToCategoryComponent,
    EditSubjectToCategoryComponent,
    ClassCategoriesComponent,
    SubjectCategoriesComponent,
    EditCategoryComponent    
  ],
  entryComponents: [
    ClassCategoriesComponent,
    EditCategoryComponent,
    AddClassToCategoryComponent,
    AddSubjectToCategoryComponent,
    EditClassToCategoryComponent,
    EditSubjectToCategoryComponent
  ]
})
export class CategeoriesModule { }

