import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showloading: boolean = false;
  loadData: Array<any>;

  public AnimationBarOption;

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadClasses();    
  }

  loadClasses() {
    this._studentService.getClasses().subscribe( data => {
      this.loadData = data;
    });
  }

  loadSubjects() {
    this._studentService.getSubjects().subscribe( data => {
      this.loadData = data;
    });
  }
}
