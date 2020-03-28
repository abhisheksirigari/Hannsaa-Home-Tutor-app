import { Component } from "@angular/core";
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from "../../../../shared/services/config.service";
import { JobResourceService } from "../../../../shared/services/job-resource.service";

@Component({
  selector: 'app-student-datatable',
  templateUrl: './student-datatable.component.html',
  styleUrls: ['./student-datatable.component.scss']
})
export class StudentDatatableComponent implements OnInit {

  /* pagination Info */
  loading: boolean;
  itemsPerPage = 50;
  currentPage = 1;
  totalItems = 1;
  totalSize = 1;
  isNextPage = true;

  direction: number;
  isDesc: any;
  column: any;

  searchedSequenceId = '';
  searchedMobile = '';
  searchedCity = ''
  searchedStatus = ''
  studentslist = [];

  studentStatus = '';

  filterObj = {
    's-seqid': '',
    's-mobile': '',
    's-city': '',
    's-status': ''
  };

  cities = [];

  sortObj = {
    sequenceId: true,
    name: true
  };

  constructor(
    private router: Router,
    private jobResourceService: JobResourceService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.getPage(this.currentPage);          
  }

  searchSeqIdChanged(sequenceId: any) {
    if (this.searchedSequenceId === '') {
      localStorage.setItem('s-seqid', '');
    } else {
      localStorage.setItem('s-seqid', this.searchedSequenceId);
    }
  }

  searchedMobileChanged(searchedMobile: any) {
    if (searchedMobile !== '' && searchedMobile.length === 10) {
      localStorage.setItem('s-mobile', this.searchedMobile);
      this.getPage(this.currentPage);
    } else {
      localStorage.setItem('s-mobile', '');
    }
  }

  searchCityChanged(searchCity: any) {
    if (searchCity.length === 2) {
      this.getCities(searchCity);
    }
  }

  searchCitySelected(searchCity: any) {
    if (this.searchedCity === '') {
      localStorage.setItem('s-city', '');
    } else {
      localStorage.setItem('s-city', this.searchedCity);
      this.getPage(this.currentPage);
    }
  }

  searchStatusChanged(status: any) {
    if (this.searchedStatus === '') {
      localStorage.setItem('s-status', '');
    } else {
      localStorage.setItem('s-status', this.searchedStatus);
    }
  }

  getPageItems(page: any, itemsPerPage: any) {
    this.getPage(page);
  }

  getPage(page: number) {
    this.currentPage = page;
    const tempPage = page == 1 ? 0 : page - 1;
    if (this.isNextPage && tempPage >= 0 && tempPage <= (this.totalSize - 1)) {
      this.getFilterResults(tempPage, this.itemsPerPage);
    } else {
      this.isNextPage = true;
      this.getPage(tempPage + 1);
    }
  }

  getFilterResults(currentPage: any, size: any) {
    this.jobResourceService.getStudentEnquiry(currentPage, size).subscribe(data => {
      // this.studentslist = data.contents.sort((a, b) => a.id - b.id);
      this.studentslist = data.contents;
      this.studentslist.forEach(list => {
        list.name = list.student.name;
        list.mobile = list.student.mobile;
        list.city = list.student.city;
        if ( list.hasOwnProperty('applications')) {
          list.response = list.applications !== null ? list.applications.length : 0;
        }
      });
      this.totalItems = data.totalSize;
      this.totalSize = data.page;
      this.isNextPage = data.next;
      this.currentPage = data.size + 1;
      
      this.setFilters();
    });
  }

  setFilters() {
    let filterObj = this.loadFilters();
    for (var propName in filterObj) {
      if (filterObj[propName] === '' || filterObj[propName] === null || filterObj[propName] === undefined || filterObj[propName] === 'undefined' || 
      filterObj[propName] === 'null') {
        localStorage.setItem(propName, '');
        filterObj[propName] = '';        
      } else {
        if (propName === 's-seqid') {
          this.searchedSequenceId = filterObj[propName];
        }
        if (propName === 's-mobile') {
          this.searchedMobile = filterObj[propName];
        }
        if (propName === 's-city') {
          this.searchedCity = filterObj[propName];          
        }
        if (propName === 's-status') {
          this.searchedStatus = filterObj[propName];
        }        
      }
    }
  }

  loadFilters() {
    let filterObj = {};
    filterObj['s-seqid'] = localStorage.getItem('mobile');
    filterObj['s-mobile'] = localStorage.getItem('s-mobile');
    filterObj['s-city'] = localStorage.getItem('s-city');
    filterObj['s-status'] = localStorage.getItem('s-status');
    return filterObj;
  }

  ViewEnquiry(enquiry: any) {
    let enquiryURL = enquiry.sequenceId.split('/').join('^');
    this.router.navigate(['dashboard/student/view/' + enquiryURL]);
  }

  clearSeqIdChanged() {
    this.searchedSequenceId = '';
    localStorage.setItem('s-seqid', '');
    this.getPage(this.currentPage);
  }

  clearMobile() {
    this.searchedMobile = '';
    localStorage.setItem('s-mobile', '');
    this.getPage(this.currentPage);
  }

  clearCity() {
    this.searchedCity = '';
    localStorage.setItem('s-city', '');
    this.getPage(this.currentPage);
  }

  clearStatus() {
    this.searchedStatus = '';
    localStorage.setItem('s-status', '');
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

    this.studentslist.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1 * this.direction;
      } else if (a[property] > b[property]) {
        return 1 * this.direction;
      } else {
        return 0;
      }
    });
  }

  getCities(city: any) {
    this.configService.getCityByName(city).subscribe(data => {
      this.cities = data;
    });
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

}








