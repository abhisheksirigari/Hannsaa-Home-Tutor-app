import { Component } from "@angular/core";
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorService } from "../../../../shared/services/tutor.service";
import { ModalService } from "../../../../shared/services/modal.service";
import { TutorDatatableFilterComponent } from "../tutor-datatable-filter/tutor-datatable-filter.component";
import { ConfigService } from "../../../../shared/services/config.service";

import * as MobileDetect from "mobile-detect";

@Component({
  selector: 'app-tutor-datatable',
  templateUrl: './tutor-datatable.component.html',
  styleUrls: ['./tutor-datatable.component.scss']
})
export class TutorDatatableComponent implements OnInit {

  /* pagination Info */
  loading: boolean;
  itemsPerPage = 50;
  currentPage = 1;
  totalItems = 1;
  totalSize = 1;
  isNextPage = true;
  rangeLabelPerPage = '';

  searchedCity = '';
  searchedMobile = '';

  direction: number;
  isDesc: any;
  column: any;

  tutorslist: any[] = [];
  selectedTutorslist: any[] = [];

  searchCity = '';
  searchMobile = '';
  selectedAll = false;
  filterObj = {
    mobile: '',
    city: '',
    pincode: '',
    classcategory: '',
    subject: '',
    gender: '',
    modeOfTeaching: '',
    modeOfJob: '',
    experience: '',
    fluencyInEnglish: '',
    email: ''
  };
  filterObjLength = 0;

  categories = [];
  categorySubjects = [];

  cities: string[] = [];
  status = ['Open', 'Demo Schedule', 'Demo Taken', 'Confirm', 'Postponed', 'Cancel'];
  viewTutorDetails = false;

  sortObj = {
    sequenceId: true,
    name: true,
    mobile: true,
    city: true
  };

  constructor(
    private router: Router,
    private _tutorService: TutorService,
    private modalService: ModalService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.getPage(this.currentPage);
    this.getCategory();
    this.getSubjects();
  }

  searchCityChanged(searchCity: any) {
    if (searchCity.length === 2) {
      this.getCities(searchCity);
    }
  }

  searchCitySelected(searchCity: any) {
    if (this.searchCity === '') {
      localStorage.setItem('city', '');
    } else {
      localStorage.setItem('city', this.searchCity);
      this.getPage(this.currentPage);
    }
  }

  searchMobileChanged(searchMobile: any) {
    if (searchMobile !== '' && searchMobile.length === 10) {
      localStorage.setItem('mobile', this.searchMobile);
      this.getPage(this.currentPage);
    } else {
      localStorage.setItem('mobile', '');
    }
  }

  selectAll() {
    for (var i = 0; i < this.tutorslist.length; i++) {
      this.tutorslist[i].selected = this.selectedAll;
    }
  }

  isSelected(item: any) {
    if (item.selected) {
      this.selectedTutorslist.push(item);
    } else {
      let index = this.selectedTutorslist.indexOf(item);
      if (index > -1) {
        this.selectedTutorslist.splice(index, 1);
      }
    }
    console.log(this.selectedTutorslist);
  }

  getPageItems(page: any, itemsPerPage: any) {
    this.getPage(page);
  }

  getRangeLabel(page: any, pageSize: any) {
    const startItem = ((page * pageSize) + 1);
    const endItem = (page + 1) * pageSize;
    return startItem + ' - ' + endItem + ' of ';
  }

  getPage(page: number) {
    this.currentPage = page;
    const tempPage = page == 1 ? 0 : page - 1;
    if (this.isNextPage && tempPage >= 0 && tempPage <= (this.totalSize - 1)) {

      let filterObj = this.getFilterObjectValues();
      for (var propName in filterObj) {
        if (filterObj[propName] === '' || filterObj[propName] === null || filterObj[propName] === undefined || filterObj[propName] === 'undefined') {
          delete filterObj[propName];
        }        
      }
      if (filterObj['classcategory']) {
        let classcategory = this.categories.filter((item: any) => item.id == filterObj['classcategory']);
        if (classcategory.length > 0) {
          filterObj['classcategory'] = (classcategory[0].name).split(/\s/).join('');
        }
      }

      this.getFilterResults(tempPage, this.itemsPerPage, filterObj);

    } else {
      this.isNextPage = true;
      this.getPage(tempPage + 1);
    }
  }

  getFilterResults(currentPage: any, size: any, filterObj: any) {
    this.configService.getFilterResults(currentPage, size, filterObj).subscribe(data => {
      data.contents.forEach((tutorObj: any) => {
        tutorObj['selected'] = this.selectedAll ? this.selectedAll : false;
      });
      this.tutorslist = data.contents;
      this.totalItems = data.totalSize;
      this.totalSize = data.size;
      this.isNextPage = data.next;
      this.currentPage = data.page + 1;

      this.rangeLabelPerPage = this.getRangeLabel(currentPage, size);
      for (var propName in filterObj) {
        if (filterObj.hasOwnProperty('city') || filterObj.hasOwnProperty('mobile')) {
          delete filterObj[propName];
        }
      }
      this.filterObjLength = Object.keys(filterObj).length;

      this.searchMobile = localStorage.getItem('mobile');
      this.searchCity = localStorage.getItem('city');
    });
  }

  ViewEnquiry(enquiry: any) {
    this.viewTutorDetails = !this.viewTutorDetails;
    this.router.navigate(['dashboard/tutor/view/' + enquiry.id]);
  }

  clearMobileText() {
    this.searchMobile = '';
    localStorage.setItem('mobile', '');
    this.getPage(this.currentPage);
  }

  clearCityText() {
    this.searchCity = '';
    localStorage.setItem('city', '');
    this.getPage(this.currentPage);
  }

  sort(property: any) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;

    for (var propName in this.sortObj) {
      if (propName === this.column) {
        this.sortObj[propName] = !this.sortObj[propName];
      }
    }

    this.tutorslist.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1 * this.direction;
      } else if (a[property] > b[property]) {
        return 1 * this.direction;
      } else {
        return 0;
      }
    });
  }

  filterTutor() {
    const initialState = {
      title: 'Filter Student',
      closeBtnName: 'OK',
      modelData: {
        searchCity: this.searchCity,
        searchMobile: this.searchMobile,
        filterObj: this.getFilterObjectValues(),
        categories: this.categories,
        categorySubjects: this.categorySubjects
      }
    };
    const modalRef = this.modalService.showModal(TutorDatatableFilterComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.getPage(this.currentPage);
      } else {
        this.clearFilterObj();
      }
    });
  }

  getFilterObjectValues() {
    let filterObj = {};
    filterObj['mobile'] = localStorage.getItem('mobile');
    filterObj['city'] = localStorage.getItem('city');
    filterObj['pincode'] = localStorage.getItem('pincode');
    filterObj['classcategory'] = localStorage.getItem('classcategory');
    filterObj['subject'] = localStorage.getItem('subject');
    filterObj['gender'] = localStorage.getItem('gender');
    filterObj['modeOfTeaching'] = localStorage.getItem('modeOfTeaching');
    filterObj['jobType'] = localStorage.getItem('jobType');
    filterObj['experience'] = localStorage.getItem('experience');
    filterObj['fluencyInEnglish'] = localStorage.getItem('fluencyInEnglish');
    filterObj['email'] = localStorage.getItem('email');
    return filterObj;
  }

  clearFilterObj() {
    localStorage.removeItem('pincode');
    localStorage.removeItem('classcategory');
    localStorage.removeItem('subject');
    localStorage.removeItem('gender');
    localStorage.removeItem('modeOfTeaching');
    localStorage.removeItem('jobType');
    localStorage.removeItem('experience');
    localStorage.removeItem('fluencyInEnglish');
    localStorage.removeItem('email');
    this.resetPagination();
    this.getPage(this.currentPage);
  }

  getCities(city: any) {
    this.configService.getCityByName(city).subscribe(data => {
      this.cities = data;
    });
  }

  resetPagination() {
    this.tutorslist = [];
    this.itemsPerPage = 50;
    this.currentPage = 1;
    this.totalItems = 1;
    this.totalSize = 1;
    this.isNextPage = true;
    this.rangeLabelPerPage = '';
    this.selectedTutorslist = [];
  }

  keyPressCity(event: any) {
    const pattern = /[a-zA-Z\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPressMobile(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  sendWatsup() {
    let md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      alert('mobile');
      // mobile link
      this.watsupMobileLink();
    } else {
      this.watsupDesktopLink();
    }
  }

  watsupDesktopLink() {
    this.selectedTutorslist.forEach((tutor) => {
      let linkTextToShare = "https://web.whatsapp.com/send?phone=91" + tutor.whatsappNumber + '&text=HANSA_TUTOR';
      window.open(linkTextToShare, "_blank");
    });
  }

  watsupMobileLink() {
    this.selectedTutorslist.forEach((tutor) => {
      let linkTextToShare = "https://api.whatsapp.com/send?phone=91" + tutor.whatsappNumber + '&text=HANSA_TUTOR';
      window.open(linkTextToShare, "_blank");
    });
  }

  getCategory() {
    this.configService.getCategory().subscribe(data => {
      this.categories = data;
      this.categories.push({ id: '', name: 'All' });
    });
  }

  getSubjects() {
    this.configService.getSubjects().subscribe(data => {
      this.categorySubjects = data.sort((a, b) => a.name.localeCompare(b.name));      
    });
  }

}







