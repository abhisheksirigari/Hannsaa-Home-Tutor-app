import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-subject-to-category',
  templateUrl: './add-subject-to-category.component.html',
  styleUrls: ['./add-subject-to-category.component.scss']
})
export class AddSubjectToCategoryComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  categeories: any;
  selectedCategory: any;

  addClasstoCategoryForm: FormGroup;
  category: FormControl;
  className: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private _modalService: ModalService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.categeories = this.modelData.categories;
    this.createForm();
  }
  
  createForm() {
    this.addClasstoCategoryForm = this.formBuilder.group({
      category: [ this.modelData.selectedCategory.id, Validators.required],
      className: [ '', Validators.required]
    });
  }
  
  get formControls() { 
    return this.addClasstoCategoryForm.controls; 
  }

  onSubmit() {
    if (this.addClasstoCategoryForm.valid) {
      const classObj = {
        classGroupId: this.addClasstoCategoryForm.value.category,
        id: '', 
        name: this.addClasstoCategoryForm.value.className
      };
      this.onClose.next(classObj);
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}












