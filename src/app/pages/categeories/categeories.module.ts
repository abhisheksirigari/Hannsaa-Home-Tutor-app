import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { routing } from './categeories.routing';
/* components */
import { CategeoriesComponent } from './components/categeories/categeories.component';
import { AddClassCategoryComponent } from './components/add-class-category/add-class-category.component';
import { AddSubjectCategoryComponent } from './components/add-subject-category/add-subject-category.component';
import { AddClassToCategoryComponent } from './components/add-class-to-category/add-class-to-category.component';

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
    AddClassCategoryComponent,
    AddSubjectCategoryComponent,
    AddClassToCategoryComponent
  ],
  entryComponents: [
    AddClassCategoryComponent,
    AddSubjectCategoryComponent,
    AddClassToCategoryComponent
  ]
})
export class CategeoriesModule { }

