import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { AddClassToCategoryComponent } from '../add-class-to-category/add-class-to-category.component';
import { AddSubjectToCategoryComponent } from '../add-subject-to-category/add-subject-to-category.component';
import { EditClassToCategoryComponent } from '../edit-class-to-category/edit-class-to-category.component';
import { EditSubjectToCategoryComponent } from '../edit-subject-to-category/edit-subject-to-category.component';
import { StudentService } from '../../../../shared/services/student.service';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-class-categories',
  templateUrl: './class-categories.component.html',
  styleUrls: ['./class-categories.component.scss']
})
export class ClassCategoriesComponent implements OnInit {
  
  searchSubjectInput: any;
  searchClassSubjectInput: any;

  showCategories = true;
  showRespectiveCategories = false;

  hideme = [];
  isCollapse = [];
  
  newCategories = [];
  primaryCategories = [];
  classCategories = [];
    
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private _categeoriesService: CategeoriesService,
    private _studentService: StudentService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadCategories();    
  }

  loadCategories() {
    this._categeoriesService.getCategeories().subscribe( (data) => {
      this.primaryCategories = data;
      this.loadClasses();
    });
  }

  loadClasses() {
    this._studentService.getClasses().subscribe( data => {
      this.classCategories = data;
      this.loadClasseswithCategories();
    });
  }

  loadClasseswithCategories() {
    this.primaryCategories.forEach(elem => {
      elem.classes = this.filterClasses(elem.id);
    });
  }

  filterClasses(categoryClassid: any) {
    return this.classCategories.filter((item: any) => item.classGroupId == categoryClassid);    
  }

  filterForeCasts(filterVal: any) {
    this.showRespectiveCategories = true;    
    if (filterVal == "0") {
      // this.forecasts = this.cacheForecasts;
    } else {
      this.classCategories = this.classCategories.filter((item) => item.classGroupId == filterVal);
    }
  }

  editCategory(category: any) {
    const initialState = {
      title: 'Edit Category',
      closeBtnName: 'Save',
      modelData: {
        category: category
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditCategoryComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe( (result: any) => {
      if (result) {
        this._categeoriesService.editCategeories(result).subscribe( (data) => {
          alert('Sucess');
          this.loadCategories();
        });
      }
    });
  }

  addClassToCategory(categeory: any, indx: any) {
    const initialState = {
      title: 'Add Class',
      closeBtnName: 'Add',
      modelData: {
        selectedCategory: categeory,
        categories: this.primaryCategories
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddClassToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe(result => {
      if (result) {
        // categeory.classes.push(result[0]);
        this.addClassToCategoryById(result[0], categeory.id);        
      }
    });
  }

  editClassToCategory(category: any, editclass: any, indx: any, cindx: any) {
    const initialState = {
      title: 'Edit Class',
      closeBtnName: 'Update',
      modelData: {
        selectedCategory: category,
        class: editclass,
        categories: this.primaryCategories
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditClassToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe( (result: any) => {
      if (result) {
        // category.classes.splice(cindx, 1, result[0]);
        this.editClassToCategoryById(result[0], result[0].id);        
      }
    });
  }

  // deleteClassToCategory(category: any, delclass: any, pindx: any, cindx: any) {
  //   // this.primaryCategories[pindx].classes.splice(cindx, 1);
  //   this.deleteClassToCategoryById(delclass, category.id);
  // }
  
  addClassToCategoryById(data: any, id: any) {
    this._categeoriesService.addClassToCategeories(data, id).subscribe( (data) => {
      alert('Sucess');
      this.loadCategories();
    });
  }

  editClassToCategoryById(data: any, id: any) {
    this._categeoriesService.editClassToCategeories(data, id).subscribe( (data) => {
      alert('Updated Sucess');
      this.loadCategories();
    });
  }

  // deleteClassToCategoryById(data: any, id: any) {
  //   const obj = [{
  //     id: data.id
  //   }];
  //   this._categeoriesService.deleteClassToCategeories(obj, id).subscribe( (data) => {
  //     alert('deleted Sucess');
  //     this.loadCategories();
  //   });
  // }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
