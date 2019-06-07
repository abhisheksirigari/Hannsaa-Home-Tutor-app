import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  faq: any;

  editFAQForm: FormGroup;
  category: FormControl;
  className: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private _modalService: ModalService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.faq = this.modelData.faq;
    this.createForm();
  }

  createForm() {
    this.editFAQForm = this.formBuilder.group({
      question: [this.faq.question, Validators.required],
      answer: [this.faq.answer, Validators.required]
    });
  }

  get formControls() {
    return this.editFAQForm.controls;
  }

  onSubmit() {
    if (this.editFAQForm.valid) {
      const updatedFAQ = {
        "answer": this.editFAQForm.value.answer,
        "category": this.modelData.faq.category,
        "id": this.modelData.faq.id,
        "question": this.editFAQForm.value.question
      };
      this.onClose.next(updatedFAQ);
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}
