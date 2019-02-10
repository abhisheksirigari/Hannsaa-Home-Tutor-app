import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-edit-subject-category',
  templateUrl: './edit-subject-category.component.html',
  styleUrls: ['./edit-subject-category.component.scss']
})
export class EditSubjectCategoryComponent implements OnInit {
  isSubjectId: any;
  subjectsData: Array<any>;

  searchInput: any;
  
  editSubjectCategoryForm: FormGroup;
  subjectId: FormControl;
  subjectName: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _studentService: StudentService,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isSubjectId = params['id'];
      this.loadClasses(this.isSubjectId);
    });
  }
  
  loadClasses(subjectId) {
    this._studentService.getSubjects().subscribe( data => {
      this.subjectsData = data;
      this.createForm(this.subjectsData[+subjectId - 1]);
    });
  }
  
  createForm(subjectsData) {
    this.editSubjectCategoryForm = this.formBuilder.group({
      subjectId: [ subjectsData.id, Validators.required],
      subjectName: [ subjectsData.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.editSubjectCategoryForm.controls; 
  }
  onSubmit() {
    if (this.editSubjectCategoryForm.valid) {
      const updateSubject = [{
        id: this.editSubjectCategoryForm.value.subjectId, 
        name: this.editSubjectCategoryForm.value.subjectName
      }];
      this._studentService.updateSubject(updateSubject).subscribe( data => {
        const modalOptions = {
          bodyText: 'Updated Successfully.',
          actionButtonText: 'OK'
        };
        this._modalService.showErrorModal(modalOptions);
        this.router.navigate(['pages/students/subjectcategories']);
      });
    }
  }

}

