import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { TextResourcesService } from '../../../../shared/services/text-resources.service';

import { EditWhyusComponent } from '../edit-whyus/edit-whyus.component';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent implements OnInit {
  
  defaultContent = 'Why us';
  lastUpdated: any;
  textResource = 'WHY_HANSA';

  constructor(
    private modalService: ModalService,
    private textResourcesService: TextResourcesService
  ) { }

  ngOnInit() {
    this.loadWhyus();
  }

  loadWhyus() {
    this.textResourcesService.getWhyus(this.textResource).subscribe(data => {
      if (data == null || data.content == null) {
        this.defaultContent = '<p>Please Write Why us</p>';
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

  editWhyus() {
    const initialState = {
      title: 'Edit Aboutus',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditWhyusComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        const content = {
          "content": result,
          "textType": this.textResource
        };
        this.textResourcesService.addWhyus(content).subscribe(data => {
          this.loadWhyus();
        });
      }
    });
  }

  clearWhyus() {
    const content = {
      'content': '<p>Please Write Why us</p>',
      'textType': this.textResource
    };
    this.textResourcesService.deleteWhyus(content).subscribe(data => {
      this.loadWhyus();
      document.getElementById('text-output').innerHTML = '';
    });
  }

}
