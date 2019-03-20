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
    AddSubjectToCategoryComponent
  ],
  entryComponents: [
    AddClassToCategoryComponent,
    AddSubjectToCategoryComponent
  ]
})
export class CategeoriesModule { }

