import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './metadata.routing';
import { MetadataComponent } from './components/metadata/metadata.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
      MetadataComponent
    ],
    entryComponents: []
})
export class MetadataModule { }

