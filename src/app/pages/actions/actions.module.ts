import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './actions.routing';
import { SharedModule } from '../../shared/shared.module';
import { CategeoriesModule } from '../categeories/categeories.module';

import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    ActionsComponent
  ]
})
export class ActionsModule { }
