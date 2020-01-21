import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {
  
    showloading: boolean = false;
    loadData: Array<any>;
  
    public AnimationBarOption;
  
    constructor(
      private _studentService: StudentService
    ) { }
  
    ngOnInit() {
      // this.loadClasses();    
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
  

