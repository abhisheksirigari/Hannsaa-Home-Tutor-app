import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-subject-categories',
  templateUrl: './subject-categories.component.html',
  styleUrls: ['./subject-categories.component.scss']
})
export class SubjectCategoriesComponent implements OnInit {

  subjectsData: Array<any>;

  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this._studentService.getSubjects().subscribe( data => {
      this.subjectsData = data;
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
