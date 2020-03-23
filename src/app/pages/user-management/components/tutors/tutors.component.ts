import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { UserManagementService } from '../../../../shared/services/user-management.service';
import { ViewTutorComponent } from '../view-tutor/view-tutor.component';
import { TutorFilterComponent } from '../tutor-filter/tutor-filter.component';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {
  classesData: Array<any>;
  tutorsData: any;
  tutors = [];

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
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadTutors(this.currentPage, this.size);
  }

  loadTutors(currentPage: any, size: any) {
    this._userManagementService.getTutors(currentPage, size).subscribe(data => {
      this.tutorsData = data;
      // delete data.contents[0];
      this.tutors = data.contents;
      console.log(this.tutors);
    });
  }

  editClass(editClass) {
    this.router.navigate(['students/editclasscategories/' + editClass.id]);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  ViewTutor(tutor: any) {
    const initialState = {
      title: 'View Tutor',
      closeBtnName: 'OK',
      modelData: tutor
    };
    const modalRef: BsModalRef = this.modalService.showModal(ViewTutorComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {

      }
    });
  }

  clearFilter() {
    this.loadTutors(this.currentPage, this.size);
  }

  filterTutor() {
    const initialState = {
      title: 'Filter Tutors',
      closeBtnName: 'OK',
      modelData: this.tutors
    };
    const modalRef: BsModalRef = this.modalService.showModal(TutorFilterComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        // this.loadTutors();
        this.multiFilter(this.tutors, result);
        console.log(this.tutors);
      }
    });
  }

  multiFilter(targetArray, filter: any) {
    this.tutors = targetArray.filter( (item) => {
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
