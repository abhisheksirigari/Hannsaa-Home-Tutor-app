import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddClassComponent } from '../add-class/add-class.component';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-class-categories',
  templateUrl: './class-categories.component.html',
  styleUrls: ['./class-categories.component.scss']
})
export class ClassCategoriesComponent implements OnInit {
  classesData: Array<any>;

  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private router: Router,
    private _studentService: StudentService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this._studentService.getClasses().subscribe( data => {
      this.classesData = data;
    });
  }

  editClass(editClass) {
    this.router.navigate(['pages/students/editclasscategories/' + editClass.id ]);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  addClass() {
    const initialState = {
      title: 'Add Class',
      closeBtnName: 'Add',
      modelData: {}
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddClassComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe(result => {
      if (result) {
        this.loadClasses();
      }
    });
  }

}
