import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { AddClassToCategoryComponent } from '../add-class-to-category/add-class-to-category.component';
import { AddSubjectToCategoryComponent } from '../add-subject-to-category/add-subject-to-category.component';

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

  hideme = [];
  hidemeSubj = [];
  isCollapse = [];
  isCollapseSubj = [];
  
  newCategories = [];
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
      this.loadClasseswithCategories();
    });
  }

  loadClasseswithCategories() {
    this.primaryCategories.forEach(elem => {
      elem.classes = this.filterClasses(elem.id);      
      elem.subjects = this.filterSubjects(elem.id);
    });
  }

  filterClasses(categoryClassid: any) {
    return this.categeoriesData['classes'].filter((item: any) => item.classGroupId == categoryClassid);    
  }

  filterSubjects(categorySubectid: any) {
    return this.categeoriesData['subjects'].filter((item: any) => item.classGroupId == categorySubectid);
  }

  

  filterForeCasts(filterVal: any) {
    this.showRespectiveCategories = true;    
    if (filterVal == "0") {
      // this.forecasts = this.cacheForecasts;
    } else {
      this.classCategories = this.categeoriesData['classes'].filter((item) => item.classGroupId == filterVal);
      this.subjectCategories = this.categeoriesData['subjects'].filter((item) => item.classGroupId == filterVal);        
    }
  }

  loadSelectedCategories() {
    this._categeoriesService.getCategeories().subscribe( (data) => {
      this.categeoriesData = data;
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
    modalRef.content.onClose.subscribe(result => {
      if (result) {
        categeory.subjects.push(result[0]);
        // this.loadConfigCategories();
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
        categeory.classes.push(result[0]);
        // this.loadConfigCategories();
      }
    });
  }

  editClassToCategory(category) {

  }
  
  deleteClassToCategory(pindx: any, cindx: any) {
    this.primaryCategories[pindx].classes[cindx].splice(1, 1);
  }  

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}