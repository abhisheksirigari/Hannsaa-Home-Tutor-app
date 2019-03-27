import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedCategory: any;
  
  isclassId: any;
  classesData: Array<any>;
  
  addClasstoCategoryForm: FormGroup;
  category: FormControl;
  className: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _studentService: StudentService,
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
      className: [ this.modelData.class.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.addClasstoCategoryForm.controls; 
  }

  onSubmit() {
    if (this.addClasstoCategoryForm.valid) {
      const updateClass = [{
        classGroupId: this.addClasstoCategoryForm.value.category,
        id: this.addClasstoCategoryForm.value.category, 
        name: this.addClasstoCategoryForm.value.className
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




