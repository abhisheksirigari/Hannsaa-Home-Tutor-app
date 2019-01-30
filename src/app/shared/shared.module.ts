import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PellEditorComponent } from './components/pell-editor/pell-editor.component';
import { AlertComponent } from './components/alert/alert.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { StudentService } from './services/student.service';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap';
import { ModalService } from './services/modal.service';
import { WebService } from './services/web.service';
import { WindowRefService } from './services/window-ref.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { RouterModule } from '@angular/router';
import { UserManagementService } from './services/user-management.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot(),   
    NgxPaginationModule,
    JsonpModule    
  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    GenericModalComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    GenericModalComponent
  ],
  providers: [
    BsModalService,
    BsModalRef,
    ModalService,
    WebService,
    WindowRefService,
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    StudentService,
    UserManagementService
  ]
})
export class SharedModule { }
