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

  showForm = false;
  modelData: any;
  tutorFilter: any;

  tutorFilterForm: FormGroup;
  submitted = false;

  categories = [];
  subjects = [];
  categorySubjects = [];

  allGenders = [{ value: 'MALE', display: 'MALE' }, { value: 'FEMALE', display: 'FEMALE' },
  { value: 'CANT_DISCLOSE', display: 'CANT_DISCLOSE' }, { value: '', display: 'ANY' }];
  experiences = [{ value: '0-2', display: '0 to 2' }, { value: '3-5', display: '3 to 5' },
  { value: '6-10', display: '6 to 10' }, { value: '11-15', display: '11 to 15' },
  { value: '16-20', display: '16 to 20' }, { value: '21-30', display: '210 to 30' },
  { value: '31-40', display: '31 to 40' },
  { value: '40+', display: 'More than 40' }];
  modeTeaching: any = [{ display: 'Tutor / Faculty', value: 'TUTOR/FACULTY' },
  { display: 'Any', value: '' }];
  modeJob: any = [{ display: 'Full Time', value: 'FULLTIME' },
  { display: 'Part Time', value: 'PARTTIME' }, { display: 'All', value: '' }];
  fluencyEnglish: any = [{ display: 'All', value: '' }, { display: 'Good', value: 'Good' },
  { display: 'Excellent', value: 'Excellent' }];

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private _modalService: ModalService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();

    this.tutorFilter = this.modelData.filterObj;
    let filterObj = this.modelData.filterObj;
    for (var propName in filterObj) {
      if (filterObj[propName] === '' || filterObj[propName] === null || filterObj[propName] === undefined || filterObj[propName] === 'undefined') {
        filterObj[propName] = '';
      }
    }

    this.categories = this.modelData.categories;
    this.categorySubjects = this.modelData.categorySubjects;
    
    this.createForm(filterObj);

  }

  createForm(tutorFilter: any) {
    this.tutorFilterForm = this.formBuilder.group({
      // location: [''],
      pincode: ['' + tutorFilter.pincode || '', Validators.compose([
        Validators.pattern('^[0-9]{2,8}$')
      ])],
      classcategory: [tutorFilter.classcategory || ''],
      subject: [tutorFilter.subject || ''],
      gender: [tutorFilter.gender || ''],
      modeOfTeaching: [tutorFilter.modeOfTeaching || ''],
      jobType: [tutorFilter.jobType || ''],
      experience: [tutorFilter.experience || ''],
      fluencyInEnglish: [tutorFilter.fluencyInEnglish || ''],
      // status: [''],      
      // adharNumber: ['', Validators.compose([
      //   Validators.pattern('^\\d{16}$')
      // ])],
      email: [tutorFilter.email || '', [Validators.email]]
    }
      // {
      //   validator: MustMatch('', '')
      // }
    );

    let tempFilterObj = this.tutorFilter;
    if (tempFilterObj.classcategory !== '' || tempFilterObj.classcategory !== undefined || tempFilterObj.classcategory !== 'undefined'
      || tempFilterObj.classcategory !== null) {
      this.classcategory.setValue(tempFilterObj.classcategory, {
        onlySelf: true
      });
      this.filterSubjects(tempFilterObj.classcategory);
    }
  }


  // convenience getter for easy access to form fields
  get f() { return this.tutorFilterForm.controls; }

  get pincode() {
    return this.tutorFilterForm.get('pincode');
  }

  get classcategory() {
    return this.tutorFilterForm.get('classcategory');
  }

  get subject() {
    return this.tutorFilterForm.get('subject');
  }

  get gender() {
    return this.tutorFilterForm.get('gender');
  }

  get modeOfTeaching() {
    return this.tutorFilterForm.get('modeOfTeaching');
  }

  get jobType() {
    return this.tutorFilterForm.get('jobType');
  }

  get experience() {
    return this.tutorFilterForm.get('experience');
  }

  get fluencyInEnglish() {
    return this.tutorFilterForm.get('fluencyInEnglish');
  }

  get email() {
    return this.tutorFilterForm.get('email');
  }


  // Getter method to access formcontrols
  changedClassCategory(e: any) {
    this.classcategory.setValue(e.target.value, {
      onlySelf: true
    });
    this.filterSubjects(e.target.value);
  }

  changedSubjectcategory(e: any) {
    this.subject.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changedGender(e: any) {
    this.gender.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeModeOfTeaching(e: any) {
    this.modeOfTeaching.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changedJobType(e: any) {
    this.jobType.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changedExperience(e: any) {
    this.experience.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changedfluencyEnglish(e: any) {
    this.fluencyInEnglish.setValue(e.target.value, {
      onlySelf: true
    })
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tutorFilterForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.tutorFilterForm.value));

    localStorage.setItem('pincode', this.tutorFilterForm.value.pincode);
    localStorage.setItem('classcategory', this.tutorFilterForm.value.classcategory);
    localStorage.setItem('subject', this.tutorFilterForm.value.subject);
    localStorage.setItem('gender', this.tutorFilterForm.value.gender);
    localStorage.setItem('modeOfTeaching', this.tutorFilterForm.value.modeOfTeaching);
    localStorage.setItem('jobType', this.tutorFilterForm.value.jobType);
    localStorage.setItem('experience', this.tutorFilterForm.value.experience);
    localStorage.setItem('fluencyInEnglish', this.tutorFilterForm.value.fluencyInEnglish);
    localStorage.setItem('email', this.tutorFilterForm.value.email);

    this.onClose.next(this.tutorFilterForm.value);
    this._modalService.close();
  }

  clear() {
    this.onClose.next(false);
    this._modalService.close();
  }

  close() {
    this._modalService.close();
  }

  filterSubjects(categorySubjectId: any) {
    this.subjects = this.categorySubjects.filter((item: any) => item.classGroupId == categorySubjectId);
  }

}
