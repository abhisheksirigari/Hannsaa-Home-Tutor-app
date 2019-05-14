import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss']
})
export class AddFaqComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  faq: any;

  addFAQForm: FormGroup;
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
    this.addFAQForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  get formControls() {
    return this.addFAQForm.controls;
  }

  onSubmit() {
    if (this.addFAQForm.valid) {
      const updatedFAQ = {
        "category": this.modelData.faq.category,
        "question": this.addFAQForm.value.question,
        "answer": this.addFAQForm.value.answer
      };
    this.onClose.next(updatedFAQ);
    this.bsModalRef.hide();
  }
}

close() {
  this.bsModalRef.hide();
}

}

