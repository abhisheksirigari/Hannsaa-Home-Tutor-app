import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { AddClassToCategoryComponent } from '../add-class-to-category/add-class-to-category.component';
import { EditClassToCategoryComponent } from '../edit-class-to-category/edit-class-to-category.component';
import { StudentService } from '../../../../shared/services/student.service';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-class-categories',
  templateUrl: './class-categories.component.html',
  styleUrls: ['./class-categories.component.scss']
})
export class ClassCategoriesComponent implements OnInit {

  hideme = [];
  isCollapse = [];

  newCategories = [];
  primaryCategories = [];
  classCategories = [];

  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  showAddCategory = false;
  addcategory = '';

  constructor(
    private _categeoriesService: CategeoriesService,
    private _studentService: StudentService,
    private modalService: ModalService    
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._categeoriesService.getCategeories().subscribe((data) => {
      this.primaryCategories = data;
      this.loadClasses();
    });
  }

  loadClasses() {
    this._studentService.getClasses().subscribe(data => {
      this.classCategories = data.sort((a, b) => a.name.localeCompare(b.name));
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

  addCategory() {
    const category = [];
    category.push({
      name: this.addcategory
    });
    this._categeoriesService.addCategeory(category).subscribe((data) => {
      this.showAddCategory = !this.showAddCategory;
      this.loadCategories();
    });
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
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this._categeoriesService.editCategeories(result).subscribe((data) => {
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
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.addClassToCategoryById(result, result.classGroupId);
      }
    });
  }

  editClassToCategory(editclass: any, indx: any, cindx: any) {
    const initialState = {
      title: 'Edit Class',
      closeBtnName: 'Update',
      modelData: {
        selectedClass: editclass,
        categories: this.primaryCategories
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditClassToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.editClassToCategoryById(result, result.classGroupId);
      }
    });
  }

  addClassToCategoryById(data: any, id: any) {
    this._categeoriesService.addClassToCategeories(data, id).subscribe((data) => {
      this.loadCategories();
    });
  }

  editClassToCategoryById(data: any, id: any) {
    this._categeoriesService.editClassToCategeories(data, id).subscribe((data) => {
      this.loadCategories();
    });
  }

  deleteClassToCategory(delclass: any, indx: any, cindx: any) {
    const delObj = {
      id: delclass.id
    };
    this.deleteClassToCategoryById(delObj, delclass.classGroupId);
  }

  deleteClassToCategoryById(data: any, id: any) {
    this._categeoriesService.deleteClassToCategeories(data, id)
      .subscribe((data) => {
        const modalOptions = {
          bodyText: 'deleted Sucessfully..!',
          actionButtonText: 'OK'
        };
        this.modalService.showErrorModal(modalOptions);
        this.loadCategories();
      });
  }
}
