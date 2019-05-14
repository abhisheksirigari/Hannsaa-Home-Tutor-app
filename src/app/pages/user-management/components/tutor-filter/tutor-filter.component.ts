import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-tutor-filter',
  templateUrl: './tutor-filter.component.html',
  styleUrls: ['./tutor-filter.component.scss']
})
export class TutorFilterComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  tutors: any;

  tutorFilterForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private _modalService: ModalService) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.tutors = this.modelData;
    this.tutorFilterForm = this.formBuilder.group({
      // gender: ['', Validators.required]
      name: [''],
      qualification: [''],
      email: ['', [Validators.email]],
      location: ['', [Validators.minLength(6)]],
      year: ['',],
      month: ['',],
      day: ['',],
      gender: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.tutorFilterForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tutorFilterForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.tutorFilterForm.value));
    const filterObj = {
      age: 0,
      category: null,
      city: "Hyderabad",
      classcategory: null,
      credit: 500,
      dob: "1990-12-12",
      education: null,
      email: "sushant001@gmail.com",
      experience: "11-15",
      experiences: null,
      gender: "MALE",
      id: 2,
      imageUrl: null,
      jobType: "FULLTIME",
      location: "FRESER TOWN",
      mapping: null,
      mobile: "9908261990",
      name: "Sushant Kumar",
      partTimeReason: "",
      particularClass: null,
      qualification: "B.TECH",
      reviews: null,
      state: "10",
      subjects: null,
      types: [],
      whatsappNumber: "9908261990",
      zipCode: null
    };
    // this.onClose.next(filterObj);
    this.onClose.next(this.tutorFilterForm.value);
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

}


