import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-class-to-category',
  templateUrl: './edit-class-to-category.component.html',
  styleUrls: ['./edit-class-to-category.component.scss']
})
export class EditClassToCategoryComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  categeories: any;
  selectedClass: any;
  
  editClasstoCategoryForm: FormGroup;
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
    this.editClasstoCategoryForm = this.formBuilder.group({
      category: [ this.modelData.selectedClass.classGroupId, Validators.required],
      className: [ this.modelData.selectedClass.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.editClasstoCategoryForm.controls; 
  }

  onSubmit() {
    if (this.editClasstoCategoryForm.valid) {
      const updateClass = {
        classGroupId: this.editClasstoCategoryForm.value.category,
        id: this.modelData.selectedClass.id, 
        name: this.editClasstoCategoryForm.value.className
      };
      this.onClose.next(updateClass);
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}




