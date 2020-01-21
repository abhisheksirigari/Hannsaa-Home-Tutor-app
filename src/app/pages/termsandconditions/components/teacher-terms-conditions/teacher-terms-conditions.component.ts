import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditTermsConditionsComponent } from '../edit-terms-conditions/edit-terms-conditions.component';
import { TextResourcesService } from '../../../../shared/services/text-resources.service';

@Component({
  selector: 'app-teacher-terms-conditions',
  templateUrl: './teacher-terms-conditions.component.html',
  styleUrls: ['./teacher-terms-conditions.component.scss']
})
export class TeacherTermsConditionsComponent implements OnInit {
  defaultContent = '';
  lastUpdated: any;
  textResource = 'TNC_FOR_TUTOR';

  constructor(
    private modalService: ModalService,
    private textResourcesService: TextResourcesService
  ) { }

  ngOnInit() {
    this.loadTutorTerms();    
  }

  loadTutorTerms() {
    this.textResourcesService.getTermsNconditionsTutor(this.textResource).subscribe( data => {
      if (data == null || data.content == null) {
        this.defaultContent = '<p>Please Write Terms</p>';
      } else {
        this.defaultContent = data.content;
      }
      if (data.lastUpdated == null) {
        this.lastUpdated = '';
      } else {
        this.lastUpdated = data.lastUpdated;
      }
      document.getElementById('text-output').innerHTML = data.content;      
    });
  }

  editAboutus() {
    const initialState = {
      title: 'Edit Tutor Terms',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditTermsConditionsComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        const content = {
          "content": result,
          "textType": this.textResource
        };
        this.textResourcesService.editTermsNconditionsTutor(content).subscribe(data => {
          this.loadTutorTerms();
        });        
      }
    });
  }

  clearContent() {
    const content = {
      'content': '<p>Please Write Privacy Policy</p>',
      'textType': this.textResource
    };
    this.textResourcesService.editTermsNconditionsStudent(content).subscribe(data => {
      this.loadTutorTerms();
    });    
  }

}

