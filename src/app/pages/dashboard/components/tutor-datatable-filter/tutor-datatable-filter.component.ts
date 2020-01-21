import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { UserManagementService } from '../../../../shared/services/user-management.service';
import { ConfigService } from '../../../../shared/services/config.service';

@Component({
  selector: 'app-tutor-datatable-filter',
  templateUrl: './tutor-datatable-filter.component.html',
  styleUrls: ['./tutor-datatable-filter.component.scss']
})
export class TutorDatatableFilterComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  tutors: any;

  tutorFilterForm: FormGroup;
  submitted = false;

  categories = [];
  subjects = [];
  categorySubjects = [];

  entries = [{ name: 'Male' }, { name: 'Female' }, { name: 'Any' }];

  modeTeaching: any = ['Home Tutor / Personal tutor', 'Online Tutor', 'Tuition Centre / Group Tuition'];
  modeJob: any = ['Part Time', 'Full Time'];
  fluencyInEnglish: any = ['Good', 'Excellent'];
  statusData: any = ['Suspended', 'Active', 'Holding'];

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private _modalService: ModalService,
    private configService: ConfigService,
    private _userManagementService: UserManagementService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    
    this.getCategory();
    this.getSubjects();

    this.tutors = this.modelData;
    this.tutorFilterForm = this.formBuilder.group({
      locality: [''],
      pincode: ['', Validators.compose([
        Validators.pattern('^\\d{7}$')
      ])],
      classCategory: [''],
      subjectCategory: [''],
      modeOfTeaching: [''],
      modeOfJob: [''],
      experience: ['', [Validators.minLength(2)]],
      fluencyEnglish: [''],
      status: [''],
      gender: [''],
      adharNumber: ['', Validators.compose([
        Validators.pattern('^\\d{16}$')
      ])],
      email: ['', [Validators.email]]
    }
      // {
      //   validator: MustMatch('', '')
      // }
    );   
    
  }  


  // convenience getter for easy access to form fields
  get f() { return this.tutorFilterForm.controls; }

  get classCategory() {
    return this.tutorFilterForm.get('classCategory');
  }

  get subjectCategory() {
    return this.tutorFilterForm.get('subjectCategory');
  }

  get gender() {
    return this.tutorFilterForm.get('gender');
  }

  get modeOfTeaching() {
    return this.tutorFilterForm.get('modeOfTeaching');
  }

  get modeOfJob() {
    return this.tutorFilterForm.get('modeOfJob');
  }

  get fluencyEnglish() {
    return this.tutorFilterForm.get('fluencyEnglish');
  }

  get status() {
    return this.tutorFilterForm.get('status');
  }



  // Getter method to access formcontrols
  changeModeOfTeaching(e: any) {
    this.modeOfTeaching.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeModeOfJob(e: any) {
    this.modeOfJob.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changefluencyEnglish(e: any) {
    this.fluencyEnglish.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeStatus(e: any) {
    this.status.setValue(e.target.value, {
      onlySelf: true
    });
  }

  changedClassCategory(e: any) {
    this.classCategory.setValue(e.target.value, {
      onlySelf: true
    });
    this.filterSubjects(e.target.value);
  }

  onSelectionChange(e: any) {
    this.gender.setValue(e.target.value, {
      onlySelf: true
    });
  }

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
      subjects: null,
      types: [],
      whatsappNumber: "9908261990",
      zipCode: null
    };
    // this.onClose.next(filterObj);
    this.onClose.next(this.tutorFilterForm.value);
    this._modalService.close();
  }

  close() {
    this._modalService.close();
  }

  getCategory() {
    this.configService.getCategory().subscribe(data => {
      this.categories = data;
    });
  }

  getSubjects() {
    this.configService.getSubjects().subscribe(data => {
      this.categorySubjects = data.sort((a, b) => a.name.localeCompare(b.name));      
    });
  }

  filterSubjects(categorySubjectId: any) {
    this.subjects = this.categorySubjects.filter((item: any) => item.classGroupId == categorySubjectId);    
  }

}
