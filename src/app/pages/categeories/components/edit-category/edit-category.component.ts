import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      const categoryObj = [{
        id: this.modelData.category.id, 
        name: this.editCategoryForm.value.categoryName
      }];
      this.onClose.next(categoryObj);
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }
}

