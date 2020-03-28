import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobResourceService } from '../../../../shared/services/job-resource.service';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-view-student-enquiry',
  templateUrl: './view-student-enquiry.component.html',
  styleUrls: ['./view-student-enquiry.component.scss']
})
export class ViewStudentEnquiryComponent implements OnInit {

  enquiryId: string;
  studentEnquiryDetails: any;
  isStatusEdit = false;

  userMessage = '';

  submitted = false;
  studentEnquiryDetailsForm: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;

  constructor(
    private route: ActivatedRoute,
    private jobResourceService: JobResourceService,
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.enquiryId = params['seqId'].split('^').join('/');
      this.loadStudentEnquires(this.enquiryId);
    });
  }

  loadStudentEnquires(enquiryId: any) {
    this.jobResourceService.getStudentEnquiryById(enquiryId).subscribe( data =>{
      this.studentEnquiryDetails = data;
      this.createForm(this.studentEnquiryDetails);
    });       
  }

  createForm(studentEnquiryDetails) {
    this.studentEnquiryDetailsForm = this.formBuilder.group({
      name: [ studentEnquiryDetails.student.name, Validators.required],
      email: [ studentEnquiryDetails.student.email, Validators.required],
      subject: [ '', Validators.required],
      message: [ '', Validators.required]
    });
  }
  
  get formControls() { 
    return this.studentEnquiryDetailsForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.studentEnquiryDetailsForm.valid) {
            
    }
  }

  updateStudent() {
    this.isStatusEdit = false;
    const id = this.studentEnquiryDetails.id;
    const status = this.studentEnquiryDetails.status;
    this.jobResourceService.updateStudentEnquiryByStatus(id, status).subscribe( data =>{
      const modalOptions = {
        bodyText: 'Updated Sucessfully',
        actionButtonText: 'OK'
      };
      this.modalService.showErrorModal(modalOptions);
    });     
  }

}

