import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { StudentService } from '../../../../shared/services/student.service';

import { AddSubjectToCategoryComponent } from '../add-subject-to-category/add-subject-to-category.component';
import { EditSubjectToCategoryComponent } from '../edit-subject-to-category/edit-subject-to-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-subject-categories',
  templateUrl: './subject-categories.component.html',
  styleUrls: ['./subject-categories.component.scss']
})
export class SubjectCategoriesComponent implements OnInit {
  hideme = [];
  isCollapse = [];
  
  newCategories = [];
  primaryCategories = [];
  subjectCategories = [];
    
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
      this.loadSubjects();
    });
  }
  
  loadSubjects() {
    this._studentService.getSubjects().subscribe( data => {
      this.subjectCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      this.loadSubjectswithCategories();
    });
  }

  loadSubjectswithCategories() {
    this.primaryCategories.forEach(elem => {
      elem.subjects = this.filterSubjects(elem.id);
    });
  }

  filterSubjects(categorySubjectId: any) {
    return this.subjectCategories.filter((item: any) => item.classGroupId == categorySubjectId);    
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
          this.loadCategories();
        });
      }
    });
  }

  addSubjectToCategory(categeory: any, indx: any) {
    const initialState = {
      title: 'Add Subject',
      closeBtnName: 'Add',
      modelData: {
        selectedCategory: categeory,
        categories: this.primaryCategories
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddSubjectToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe( (result: any) => {
      if (result) {
        this.addSubjectToCategoryById(result, result.classGroupId);        
      }
    });
  }

  addSubjectToCategoryById(data: any, id: any) {
    this._categeoriesService.addSubjectToCategeories(data, id).subscribe( (data) => {
      this.loadCategories();
    });
  }

  editSubjectToCategory(editclass: any, indx: any, cindx: any) {
    const initialState = {
      title: 'Edit Class',
      closeBtnName: 'Update',
      modelData: {
        selectedClass: editclass,
        categories: this.primaryCategories
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditSubjectToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe( (result: any) => {
      if (result) {
        const modalOptions = {
          bodyText: 'Added Sucessfully..!',
          actionButtonText: 'OK'
        };
        this.modalService.showErrorModal(modalOptions);
        this.editSubjectToCategoryById(result, result.classGroupId);        
      }
    });
  }

  editSubjectToCategoryById(data: any, id: any) {
    this._categeoriesService.editSubjectToCategeories(data, id).subscribe( (data) => {
      const modalOptions = {
        bodyText: 'Updated Sucessfully..!',
        actionButtonText: 'OK'
      };
      this.modalService.showErrorModal(modalOptions);
      this.loadCategories();
    });
  }

  deleteSubjectToCategory(delclass: any, indx: any, cindx: any) {
    const delObj = {
      id: delclass.id
    };
    this.deleteSubjectToCategoryById(delObj, delclass.classGroupId);
  }

  deleteSubjectToCategoryById(data: any, id: any) {
    this._categeoriesService.deleteSubjectToCategeories(data, id)
      .subscribe( (data) => {
        const modalOptions = {
          bodyText: 'deleted Sucessfully..!',
          actionButtonText: 'OK'
        };
        this.modalService.showErrorModal(modalOptions);
        this.loadCategories();
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}

