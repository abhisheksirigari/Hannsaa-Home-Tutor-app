import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { TextResourcesService } from '../../../../shared/services/text-resources.service';
import { EditHowItWorksComponent } from '../edit-how-it-works/edit-how-it-works.component';

@Component({
  selector: 'app-tutor-how-it-works',
  templateUrl: './tutor-how-it-works.component.html',
  styleUrls: ['./tutor-how-it-works.component.scss']
})
export class TutorHowItWorksComponent implements OnInit {
  defaultContent = '';
  textResource = 'HANSA_FOR_TUTOR';
  lastUpdated: any;

  constructor(
    private modalService: ModalService,
    private textResourcesService: TextResourcesService
  ) { }

  ngOnInit() {
    this.loadPrivacyPolicy();
  }

  loadPrivacyPolicy() {
    this.textResourcesService.getTermsNconditionsStudent(this.textResource).subscribe(data => {
      if (data == null || data.content == null) {
        this.defaultContent = '<p>Please Write How it Works</p>';
      } else {
        this.defaultContent = JSON.parse(data.content).content;
      }
      if (data.lastUpdated == null) {
        this.lastUpdated = '';
      } else {
        this.lastUpdated = data.lastUpdated;
      }      
      document.getElementById('text-output').innerHTML = this.defaultContent;
    });
  }

  editPrivacypolicy() {
    const initialState = {
      title: 'Edit How it Works',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditHowItWorksComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        const content = {
          "content": result,
          "textType": this.textResource
        };
        this.textResourcesService.editTermsNconditionsStudent(content).subscribe(data => {
          this.loadPrivacyPolicy();
        });
      }
    });
  }

  clearContent() {
    const content = {
      'content': '<p>Please Write How it Works</p>',
      'textType': this.textResource
    };
    this.textResourcesService.editTermsNconditionsStudent(content).subscribe(data => {
      this.loadPrivacyPolicy();
    });
  }

}
