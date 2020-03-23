import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditTermsConditionsComponent } from '../edit-terms-conditions/edit-terms-conditions.component';
import { TextResourcesService } from '../../../../shared/services/text-resources.service';


@Component({
  selector: 'app-student-terms-conditions',
  templateUrl: './student-terms-conditions.component.html',
  styleUrls: ['./student-terms-conditions.component.scss']
})
export class StudentTermsConditionsComponent implements OnInit {
  defaultContent = '';
  lastUpdated: any;
  textResource = 'TNC_FOR_STUDENT';

  constructor(
    private modalService: ModalService,
    private textResourcesService: TextResourcesService
  ) { }

  ngOnInit() {
    this.loadStudentTerms();
  }

  loadStudentTerms() {
    this.textResourcesService.getTermsNconditionsStudent(this.textResource).subscribe( data => {
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
      document.getElementById('text-output').innerHTML = this.defaultContent;      
    });
  }

  editAboutus() {
    const initialState = {
      title: 'Edit Student Terms',
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
        this.textResourcesService.editTermsNconditionsStudent(content).subscribe(data => {
          this.loadStudentTerms();
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
      this.loadStudentTerms();
    });    
  }

}
