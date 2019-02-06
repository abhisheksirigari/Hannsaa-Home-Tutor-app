import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this._studentService.getSubjects().subscribe( data => {
      this.subjectsData = data;
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  editSubject(subject) {
    this.router.navigate(['pages/students/editsubjectcategories/' + subject.id ]);
  }

  loadData() {
    
  }

}
