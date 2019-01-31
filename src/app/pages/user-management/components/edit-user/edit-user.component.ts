import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  isclassId: any;
  classesData: Array<any>;
  submitted = false;
  
  editClassCategoryForm: FormGroup;
  classId: FormControl;
  className: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _studentService: StudentService,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isclassId = params['id'];
      this.loadClasses(this.isclassId);
    });
  }
  
  loadClasses(classId) {
    this._studentService.getClasses().subscribe( data => {
      this.classesData = data;
      this.createForm(this.classesData[classId - 1]);
    });
  }
  
  createForm(classesData) {
    this.editClassCategoryForm = this.formBuilder.group({
      classId: [ classesData.id, Validators.required],
      className: [ classesData.name, Validators.required]
    });
  }
  
  get formControls() { 
    return this.editClassCategoryForm.controls; 
  }
  onSubmit() {
    this.submitted = true;

    if (this.editClassCategoryForm.valid) {
      const updateClass = [{
        id: this.editClassCategoryForm.value.classId, 
        name: this.editClassCategoryForm.value.className
      }];
      this._studentService.updateClass(updateClass).subscribe( data => {
        const modalOptions = {
          bodyText: 'Updated Successfully.',
          actionButtonText: 'OK'
        };
        this._modalService.showErrorModal(modalOptions);
      });
    }
  }

}
