import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-edit-class-category',
  templateUrl: './edit-class-category.component.html',
  styleUrls: ['./edit-class-category.component.scss']
})
export class EditClassCategoryComponent implements OnInit {
  isclassId: any;
  classesData: Array<any>;
  
  editClassCategoryForm: FormGroup;
  classId: FormControl;
  className: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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
        this.router.navigate(['pages/students/classcategories']);
      });
    }
  }

}
