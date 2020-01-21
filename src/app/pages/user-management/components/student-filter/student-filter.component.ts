import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap';
import { MustMatch } from '../../../../shared/validators/must-match.validator.ts';
import { UserManagementService } from '../../../../shared/services/user-management.service';

import * as $ from 'jquery';
import { CategeoriesService } from '../../../../shared/services/categeories.service';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.scss']
})
export class StudentFilterComponent implements OnInit, AfterViewInit {
  onClose: Subject<any>;

  modelData: any;
  tutors: any;

  studentFilterForm: FormGroup;
  submitted = false;

  classCategories: any = [];
  classCategoriesById: any = [];
  primaryCategories: any = [];

  subjects: any = [];

  countriesData: any = [];
  countries: any = [];
  statesData: any = [];
  states: any = [];
  cities: any = [];

  entries = [{ name: 'Male' }, { name: 'Female' }, { name: 'Any' }];

  modeTeaching: any = ['Home Tutor / Personal tutor', 'Online Tutor', 'Tuition Centre / Group Tuition'];
  modeJob: any = ['Part Time', 'Full Time'];
  fluencyInEnglish: any = ['Good', 'Excellent'];
  statusData: any = ['Suspended', 'Active', 'Holding'];

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private _modalService: ModalService,
    private _userManagementService: UserManagementService,
    private _categeoriesService: CategeoriesService,
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.getCountries();
    this.getCategories();

    this.tutors = this.modelData;
    this.studentFilterForm = this.formBuilder.group({
      classCategory: ['', Validators.required],
      categoryIdClasses: ['', Validators.required],
      subjectByClass: ['', Validators.required],
      modeOfJob: ['', Validators.required],
      fluencyEnglish: ['', Validators.required],
      status: ['', Validators.required],
      name: ['', Validators.required],
      pincode: ['', Validators.required],
      qualification: ['', [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', Validators.required]
    }
      // {
      //   validator: MustMatch('', '')
      // }
    );      
  }

  ngAfterViewInit() {
    
  }  

  // convenience getter for easy access to form fields
  get f() { return this.studentFilterForm.controls; }

  get classCategory() {
    return this.studentFilterForm.get('classCategory');
  }

  get categoryIdClasses() {
    return this.studentFilterForm.get('categoryIdClasses');
  }

  get subjectByClass() {
    return this.studentFilterForm.get('subjectByClass');
  }

  get modeOfJob() {
    return this.studentFilterForm.get('modeOfJob');
  }

  get fluencyEnglish() {
    return this.studentFilterForm.get('fluencyEnglish');
  }

  get status() {
    return this.studentFilterForm.get('status');
  }

  changeClassCategory(e: any) {
    this.loadClasses(e.target.value.split(' ')[1].toLowerCase());
    this.classCategory.setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeCategoryIdClasses(e: any) {
    this.categoryIdClasses.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeSubjectByClass(e: any) {
    // this.loadClasses(e.target.value.split(' ')[1].toLowerCase());
    this.subjectByClass.setValue(e.target.value, {
      onlySelf: true
    });
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
    })
  }

  // Getter method to access formcontrols
  get country() {
    return this.studentFilterForm.get('country');
  }

  get state() {
    return this.studentFilterForm.get('state');
  }

  get city() {
    return this.studentFilterForm.get('city');
  }

  get gender() {
    return this.studentFilterForm.get('gender');
  }

  // Choose city using select dropdown
  changeCountry(e: any) {
    console.log(e.target.value);
    this.countriesData.map(country => {
      if (country.CountryName.toLowerCase() == e.target.value.split(' ')[1].toLowerCase()) {
        this.statesData = country.States;
        country.States.map(country => {
          this.states.push(country.StateName);
        });
      }
    });
    this.country.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeState(e: any) {
    console.log(e.target.value);
    this.statesData.map(state => {
      if (state.StateName.toLowerCase() == e.target.value.split(' ')[1].toLowerCase()) {
        state.Cities.map(state => {
          this.cities.push(state);
        });
      }
    });
    // StateName
    this.state.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeCity(e: any) {
    console.log(e.target.value);
    // CityName
    this.city.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onSelectionChange(e: any) {
    this.gender.setValue(e.target.value, {
      onlySelf: true
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.studentFilterForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentFilterForm.value));
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
    this.onClose.next(this.studentFilterForm.value);
    this.bsModalRef.hide();
  }

  close() {
    this._modalService.close();
  }

  getCountries() {
    this._userManagementService.getCountries().subscribe(data => {
      this.countriesData = data.Countries;
      data.Countries.map(country => {
        this.countries.push(country.CountryName);
      });
    });
  }

  getCategories() {
    this._categeoriesService.getCategeories().subscribe( data => {
      // this.classCategories = data;
      this.classCategories = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  loadClasses(id: any) {
    this._studentService.getClasses().subscribe(data => {
      this.primaryCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      this.classCategoriesById = this.filterClasses(id);
    });
  }

  filterClasses(categoryClassid: any) {
    return this.primaryCategories.filter((item: any) => item.classGroupId == categoryClassid);
  }

}



