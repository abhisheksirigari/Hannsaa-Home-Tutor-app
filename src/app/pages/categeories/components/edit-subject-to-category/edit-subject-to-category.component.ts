import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-subject-to-category',
  templateUrl: './edit-subject-to-category.component.html',
  styleUrls: ['./edit-subject-to-category.component.scss']
})
export class EditSubjectToCategoryComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  categeories: any;
  selectedClass: any;
  
  editSubjecttoCategoryForm: FormGroup;
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
    this.editSubjecttoCategoryForm = this.formBuilder.group({
      category: [ this.modelData.selectedClass.classGroupId, Validators.required],
      className: [ this.modelData.selectedClass.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.editSubjecttoCategoryForm.controls; 
  }

  onSubmit() {
    if (this.editSubjecttoCategoryForm.valid) {
      const updateClass = {
        classGroupId: this.editSubjecttoCategoryForm.value.category,
        id: this.modelData.selectedClass.id, 
        name: this.editSubjecttoCategoryForm.value.className
      };
      this.onClose.next(updateClass);
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}





