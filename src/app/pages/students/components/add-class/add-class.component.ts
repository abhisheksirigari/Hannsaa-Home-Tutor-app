import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  onClose: Subject<boolean>;

  isclassId: any;
  classesData: Array<any>;
  
  editClassCategoryForm: FormGroup;
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
    this.createForm();
  }
  
  createForm() {
    this.editClassCategoryForm = this.formBuilder.group({
      className: [ '', Validators.required]
    });
  }
  
  get formControls() { 
    return this.editClassCategoryForm.controls; 
  }
  onSubmit() {
    if (this.editClassCategoryForm.valid) {
      const updateClass = [{
        name: this.editClassCategoryForm.value.className
      }];
      this._studentService.updateClass(updateClass).subscribe( data => {
        this.onClose.next(true);
        this.bsModalRef.hide();
      });
    }
  }

}

