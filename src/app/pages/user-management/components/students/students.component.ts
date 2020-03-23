import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { StudentService } from '../../../../shared/services/student.service';
import { UserManagementService } from '../../../../shared/services/user-management.service';
import { ModalService } from '../../../../shared/services/modal.service';
import { TutorFilterComponent } from '../tutor-filter/tutor-filter.component';
import { StudentFilterComponent } from '../student-filter/student-filter.component';
import { StudentFilterService } from '../../../../shared/services/student-filter.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  classesData: Array<any>;
  tutorsData: any;
  tutors = [];

  searchText : string;
  searchTextLocation: any;

  cities: any[] = [];

  jobTypes: Array<any>;

  searchInput: any;
  searchInputCity: any;
  searchInputjobType: any;

  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;
  currentPage = 0;
  size = 10;

  constructor(
    private router: Router,
    private _studentService: StudentService,
    private _userManagementService: UserManagementService,
    private _studentFilterService: StudentFilterService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadTutors(this.currentPage, this.size);

    this.loadCities();
  }

  loadTutors(currentPage: any, size: any) {
    this._userManagementService.getTutors(currentPage, size).subscribe(data => {
      this.tutorsData = data;
      // delete data.contents[0];
      this.tutors = data.contents;
      console.log(this.tutors);
    });
  }

  loadCities() {
    this._studentFilterService.getCities().subscribe(data => {
      this.cities = data;      
      this.cities.push({id: 1111, name: 'Agra'});      
      this.cities.push({id: 1112, name: 'Bhajanpura'}); 
      this.cities.unshift({id: 1100, name: 'All'});     
    });    
  }

  changeCity(eve: any) {
    this.searchTextLocation = eve.target.value;
  }

  editClass(editClass) {
    this.router.navigate(['students/editclasscategories/' + editClass.id]);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  ViewDetails(details: any) {
    this.router.navigate(['usermanagement/view/' + details.city + '/' + details.id]);    
  }

  clearContent() {
    this.searchTextLocation = this.cities[0].name;
    this.searchText = '';
    this.loadTutors(this.currentPage, this.size);
  }
  
  editPrivacypolicy() {
    this.loadTutors(this.currentPage, this.size);
  }

  clearFilter () {
    this.loadTutors(this.currentPage, this.size);
  }

  filterTutor() {
    const initialState = {
      title: 'Filter Student',
      closeBtnName: 'OK',
      modelData: this.tutors
    };
    const modalRef: BsModalRef = this.modalService.showModal(StudentFilterComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.multiFilter(this.tutors, result);
      }
    });
  }

  multiFilter(targetArray: any, filter: any) {
    this.tutors = targetArray.filter( (item: any) => {
      for (let key in filter) {
        if (filter[key] && item[key] != filter[key])
          return false;
      }
      return true;
    });
  }

  onEvent(event: any) {
    event.stopPropagation();
  }
}

