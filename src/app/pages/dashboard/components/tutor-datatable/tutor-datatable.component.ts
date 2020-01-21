import { Component } from "@angular/core";
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobResourceService } from "../../../../shared/services/job-resource.service";
import { StudentService } from "../../../../shared/services/student.service";
import { TutorService } from "../../../../shared/services/tutor.service";
import { ModalService } from "../../../../shared/services/modal.service";
import { UserManagementService } from "../../../../shared/services/user-management.service";
import { StudentFilterService } from "../../../../shared/services/student-filter.service";
import { TutorDatatableFilterComponent } from "../tutor-datatable-filter/tutor-datatable-filter.component";
import { ConfigService } from "../../../../shared/services/config.service";

@Component({
  selector: 'app-tutor-datatable',
  templateUrl: './tutor-datatable.component.html',
  styleUrls: ['./tutor-datatable.component.scss']
})
export class TutorDatatableComponent implements OnInit {

  /* pagination Info */
  loading: boolean;
  itemsPerPage = 5;
  currentPage = 1;
  totalItems = 1;
  totalSize = 1;
  isNextPage = true;
  rangeLabelPerPage = '';
  searchType = 'allTutors';
  searchedCity = '';
  searchedMobile = '';

  direction: number;
  isDesc: any;
  column: any;

  tutorslist: any[] = [];

  searchCity = '';
  searchMobile = '';
  selectedAll = false;

  cities: string[] = [];
  status = ['Open', 'Demo Schedule', 'Demo Taken', 'Confirm', 'Postponed', 'Cancel'];

  constructor(
    private router: Router,
    private jobResourceService: JobResourceService,
    private studentService: StudentService,
    private _tutorService: TutorService,
    private modalService: ModalService,
    private _userManagementService: UserManagementService,
    private _studentFilterService: StudentFilterService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.getPage(this.currentPage);
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

  searchCityChanged(searchCity: any) {
    if (searchCity.length === 2) {
      this.getCities(searchCity);
    }
  }

  searchCitySelected(searchCity: any) {
    if (searchCity == '' && this.searchMobile == '') {
      this.getPage(this.currentPage);
      return false;
    } else if (searchCity !== '' && this.searchMobile == '') {
      this.loadTutorsByCity(searchCity);
    } else if (searchCity !== '' && this.searchMobile != '') {
      this.getTutorsByCityMobile(searchCity, this.searchMobile);
    }
  }

  searchMobileChanged(searchMobile: any) {
    if (searchMobile == '' && this.searchCity == '') {
      this.getPage(this.currentPage);
      return false;
    } else if (searchMobile !== '' && this.searchCity == '' && searchMobile.length === 10) {
      this.loadTutorsByMobile(searchMobile);
    } else if (searchMobile !== '' && this.searchCity != '' && searchMobile.length === 10) {
      this.getTutorsByCityMobile(this.searchCity, searchMobile);
    }
  }

  selectAll() {
    for (var i = 0; i < this.tutorslist.length; i++) {
      this.tutorslist[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.tutorslist.every(function (item: any) {
      return item.selected == true;
    });
  }

  getPageItems(page: any, itemsPerPage: any) {
    this.getPage(page);
  }

  getRangeLabel(page: any, pageSize: any) {
    const startItem = ((page * pageSize) + 1);
    const endItem = (page + 1) * pageSize;
    return  startItem + ' - ' + endItem + ' of ';
  }

  getPage(page: number) {
    this.currentPage = page;
    const tempPage = page == 1 ? 0 : page - 1;
    if (this.isNextPage && tempPage >= 0 && tempPage <= (this.totalSize - 1)) {
      if (this.searchType == 'allTutors') {
        this.loadTutors(tempPage, this.itemsPerPage);
      } else if (this.searchType == 'tutorsByCity') {
        this.getTutorsByCity(tempPage, this.itemsPerPage);        
      } else if (this.searchType == 'tutorsByMobile') {
        this.getTutorsByMobile(tempPage, this.itemsPerPage);
      }  else if (this.searchType == 'tutorsByCityMobile') {
        this.getTutorsByCityMobile(tempPage, this.itemsPerPage);
      }      
    } else {
      this.isNextPage = true;
      this.getPage(tempPage + 1);
    }
    this.rangeLabelPerPage = this.getRangeLabel(tempPage, this.itemsPerPage);
  }

  loadTutorsByCityMobile(city: any, mobile: any) {
    this.resetPagination();
    this.searchType = 'tutorsByCityMobile';
    this.searchedCity = city;
    this.searchedMobile = mobile;
    this.getPage(this.currentPage);    
  }

  loadTutorsByCity(city: any) {
    this.resetPagination();
    this.searchType = 'tutorsByCity';
    this.searchedCity = city;
    this.getPage(this.currentPage);    
  }

  loadTutorsByMobile(mobileNumber: any) {
    this.resetPagination();
    this.searchType = 'tutorsByMobile';
    this.searchedMobile = mobileNumber;
    this.getPage(this.currentPage);    
  }

  getTutorsByCityMobile(currentPage: any, size: any) {
    this._tutorService.getTutorsByCityMobile(this.searchedCity, this.searchedMobile, currentPage, size).subscribe(data => {
      data.contents.forEach(tutorObj => {
        tutorObj['selected'] = this.selectedAll ? this.selectedAll : false;
      });
      this.tutorslist = data.contents;
      this.totalItems = data.totalSize;
      this.totalSize = data.size;
      this.isNextPage = data.next;
      this.currentPage = data.page + 1;
    });
  }

  getTutorsByCity(currentPage: any, size: any) {
    this._tutorService.getTutorsByCity(this.searchedCity, currentPage, size).subscribe(data => {
      data.contents.forEach(tutorObj => {
        tutorObj['selected'] = this.selectedAll ? this.selectedAll : false;
      });
      this.tutorslist = data.contents;
      this.totalItems = data.totalSize;
      this.totalSize = data.size;
      this.isNextPage = data.next;
      this.currentPage = data.page + 1;
    });
  }

  getTutorsByMobile(currentPage: any, size: any) {
    this._tutorService.getTutorsByMobile(this.searchedMobile, currentPage, size).subscribe(data => {
      data.contents.forEach(tutorObj => {
        tutorObj['selected'] = this.selectedAll ? this.selectedAll : false;
      });
      this.tutorslist = data.contents;
      this.totalItems = data.totalSize;
      this.totalSize = data.size;
      this.isNextPage = data.next;
      this.currentPage = data.page + 1;      
    });
  }

  loadTutors(currentPage: any, size: any) {
    this._tutorService.getTutors(currentPage, size).subscribe(data => {
      data.contents.forEach(tutorObj => {
        tutorObj['selected'] = this.selectedAll ? this.selectedAll : false;
      });
      this.tutorslist = data.contents;
      this.totalItems = data.totalSize;
      this.totalSize = data.size;
      this.isNextPage = data.next;
      this.currentPage = data.page + 1;
    });
  }

  ViewEnquiry(enquiry: any) {
    this.router.navigate(['pages/dashboard/tutor/view/' + enquiry.id]);
  }

  clearMobileText() {
    this.searchMobile = '';
    if (this.searchCity !== '') {
      this.searchCityChanged(this.searchCity);
    } else {
      this.getPage(this.currentPage);
    }
  }

  clearCityText() {
    this.searchCity = '';
    if (this.searchMobile !== '') {
      this.searchMobileChanged(this.searchMobile);
    } else {
      this.searchType == 'allTutors';
      this.getPage(this.currentPage);
    }
  }

  sort(property: any) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  filterTutor() {
    const initialState = {
      title: 'Filter Student',
      closeBtnName: 'OK',
      modelData: this.tutorslist
    };
    const modalRef = this.modalService.showModal(TutorDatatableFilterComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        const filterdata = {
          city: result.city,
          zip: result.zip,
          gender: result.gender,
          stdClass: result.classCategory,
          subject: result.subjectCategory,
          page: '',
          size: ''
        };
        for (var propName in filterdata) {
          if (filterdata[propName] === '' || filterdata[propName] === null || filterdata[propName] === undefined) {
            delete filterdata[propName];
          }
        }
        this.getFilterResults(filterdata);
      }
    });
  }

  getFilterResults(data: any) {
    this.configService.getFilterResults(data).subscribe(data => {
      this.tutorslist = data;
    });
  }

  getCities(city: any) {
    this.configService.getCityByName(city).subscribe(data => {
      this.cities = data;
    });
  }


  resetPagination() {
    this.tutorslist = [];
    this.itemsPerPage = 5;
    this.currentPage = 1;
    this.totalItems = 1;
    this.totalSize = 1;
    this.isNextPage = true;
    this.rangeLabelPerPage = '';
  }

}







