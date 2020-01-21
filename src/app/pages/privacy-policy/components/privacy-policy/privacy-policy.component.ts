import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/services/modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { TextResourcesService } from '../../../../shared/services/text-resources.service';
import { EditPrivacyPolicyComponent } from '../edit-privacy-policy/edit-privacy-policy.component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  defaultContent = '';
  textResource = 'PRIVACY';
  lastUpdated: any;

constructor(
  private modalService: ModalService,
  private textResourcesService: TextResourcesService
) { }

  ngOnInit() {
    this.loadPrivacyPolicy();    
  }

  loadPrivacyPolicy() {
    this.textResourcesService.getTermsNconditionsStudent(this.textResource).subscribe( data => {
      if (data == null || data.content == null) {
        this.defaultContent = '<p>Please Write Privacy Policy</p>';
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

  editPrivacypolicy() {
    const initialState = {
      title: 'Edit Privacy Policy',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditPrivacyPolicyComponent, { initialState, class: 'modal-lg' });
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
      'content': '<p>Please Write Privacy Policy</p>',
      'textType': this.textResource
    };
    this.textResourcesService.editTermsNconditionsStudent(content).subscribe(data => {
      this.loadPrivacyPolicy();
    });    
  }

}
