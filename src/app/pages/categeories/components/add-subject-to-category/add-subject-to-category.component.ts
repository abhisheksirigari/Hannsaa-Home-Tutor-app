import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  addSubjecttoCategoryForm: FormGroup;
  category: FormControl;
  subjectName: FormControl;

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
    this.addSubjecttoCategoryForm = this.formBuilder.group({
      category: [ this.modelData.selectedCategory.id, Validators.required],
      subjectName: [ '', Validators.required]
    });
  }
  
  get formControls() { 
    return this.addSubjecttoCategoryForm.controls; 
  }

  onSubmit() {
    if (this.addSubjecttoCategoryForm.valid) {
      const updateClass = [{
        classGroupId: this.addSubjecttoCategoryForm.value.category,
        id: this.addSubjecttoCategoryForm.value.category, 
        name: this.addSubjecttoCategoryForm.value.subjectName
      }];
      this._studentService.updateSubject(updateClass).subscribe( data => {
        this.onClose.next(updateClass);
        this.bsModalRef.hide();
      });
    }
  }

  close() {
    this.bsModalRef.hide();
  }

}



