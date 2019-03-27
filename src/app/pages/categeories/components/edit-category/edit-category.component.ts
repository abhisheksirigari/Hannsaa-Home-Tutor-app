import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  selectedCategory: any;
    
  editCategoryForm: FormGroup;
  categoryName: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private _studentService: StudentService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.selectedCategory = this.modelData.category;
    this.createForm();
  }
  
  createForm() {
    this.editCategoryForm = this.formBuilder.group({
      categoryName: [ this.modelData.category.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.editCategoryForm.controls; 
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      const updateClass = [{
        id: this.modelData.category.id, 
        name: this.editCategoryForm.value.categoryName
      }];
      this._studentService.updateClass(updateClass).subscribe( data => {
        this.onClose.next(updateClass);
        this.bsModalRef.hide();
      });
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}

