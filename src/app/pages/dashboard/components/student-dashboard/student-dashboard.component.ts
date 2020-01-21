import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit, OnDestroy {
  
    showloading: boolean = false;
    loadData: Array<any>;

 
    public AnimationBarOption: any;
  
    constructor(
      private route: Router,
      private _studentService: StudentService
    ) { }
  
    ngOnInit() {
      // this.loadClasses();
      
      
    }

    redirectToMail() {
      this.route.navigate(['pages/dashboard/student/mail']);
    }


    ngOnDestroy() {
      
    }  
   
  }
  
  