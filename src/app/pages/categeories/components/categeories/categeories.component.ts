import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddSubjectCategoryComponent } from '../add-subject-category/add-subject-category.component';
import { AddClassCategoryComponent } from '../add-class-category/add-class-category.component';
import { AddClassToCategoryComponent } from '../add-class-to-category/add-class-to-category.component';

@Component({
  selector: 'app-categeories',
  templateUrl: './categeories.component.html',
  styleUrls: ['./categeories.component.scss']
})
export class CategeoriesComponent implements OnInit {
  categeoriesData: Array<any>;

  searchSubjectInput: any;
  searchClassSubjectInput: any;

  showCategories = true;
  showRespectiveCategories = false;  

  primaryCategories = [];
  classCategories = [];
  subjectCategories = [];
  
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private _categeoriesService: CategeoriesService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadConfigCategories();
  }

  loadConfigCategories() {
    this._categeoriesService.getConfigCategeories().subscribe( (data) => {
      this.categeoriesData = data;
      this.primaryCategories = data.categories;
      this.classCategories = data.classes;
      this.subjectCategories = data.subjects;
    });
  }

  loadSelectedCategories() {
    this._categeoriesService.getCategeories().subscribe( (data) => {
      this.categeoriesData = data;
    });
  }

  addSubjectCategory() {
    const initialState = {
      title: 'Add Subject',
      closeBtnName: 'Add',
      modelData: {}
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddSubjectCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe(result => {
      if (result) {
        this.loadConfigCategories();
      }
    });
  }

  addClassCategory() {
    const initialState = {
      title: 'Add Class',
      closeBtnName: 'Add',
      modelData: {
        categeories: this.categeoriesData
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddClassToCategoryComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe(result => {
      if (result) {
        this.classCategories.unshift(result[0]);
        // this.loadConfigCategories();
      }
    });
  }

  getCategory(category) {
    return this.primaryCategories.filter((item) => item.id == category.classGroupId)[0].name;
    
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}