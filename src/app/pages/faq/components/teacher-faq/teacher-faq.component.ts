import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditFaqComponent } from '../edit-faq/edit-faq.component';
import { AddFaqComponent } from '../add-faq/add-faq.component';
import { FaqService } from '../../../../shared/services/faq.service';

@Component({
  selector: 'app-teacher-faq',
  templateUrl: './teacher-faq.component.html',
  styleUrls: ['./teacher-faq.component.scss']
})
export class TeacherFaqComponent implements OnInit {

  isCollapse = [];

  searchInput: any;
  searchCategory: any;
  isConfigToggle: boolean = false;

  faqsList: Array<any> = [];
  categeory = 'TUTOR';
  
  constructor(
    private faqService: FaqService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.getFaqs();
  }

  addFAQ() {
    const addFAQ = {
      "category": this.categeory,
      "question": '',
      "answer": '',
      "id": this.faqsList == undefined ? 0 : this.faqsList.length
    };
    const initialState = {
      title: 'Add FAQ',
      closeBtnName: 'Save',
      modelData: {
        faq: addFAQ
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddFaqComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.faqService.addFaq([result]).subscribe( data => {
          if (data) {
            this.getFaqs();
          }
        });
      }
    });
  }

  editFAQ(faq: any) {
    const initialState = {
      title: 'Edit FAQ',
      closeBtnName: 'Save',
      modelData: {
        faq: faq
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditFaqComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.faqService.editFaq([result]).subscribe( data => {
          if (data) {
            this.getFaqs();
          }
        });
      }
    });
  }

  removeFAQ(faq: any) {
    this.faqService.deleteFaq(faq).subscribe( data => {
      if (data == null || data) {
        this.getFaqs();
      }
    });
  }

  getFaqs() {
    this.faqService.getFaqs(this.categeory).subscribe( data => {
      this.faqsList = [];
      setTimeout( () => {
        this.faqsList = data;
      }, 100);
      
    });    
  }

}

