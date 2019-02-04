import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  loadData: Array<any>;

  public AnimationBarOption;

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadClasses();    
  }

  onChangeEvent(ev) {
    if (ev.target.value === 'classes') {
      this.loadData = [];
      this.loadClasses();
    } else {
      this.loadData = [];
      this.loadSubjects();
    }
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
