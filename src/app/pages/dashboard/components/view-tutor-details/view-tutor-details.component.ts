import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../shared/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tutor-details',
  templateUrl: './view-tutor-details.component.html',
  styleUrls: ['./view-tutor-details.component.scss']
})
export class ViewTutorDetailsComponent implements OnInit {

  enquiryId: string;
  profile: any;
  objectKeys = Object.keys;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.enquiryId = params['id'];
      this.getTutorDetails(this.enquiryId);
    });
  }

  getTutorDetails(id) {
    this.configService.getTutorById(id).subscribe(data => {
      this.profile = data;
      this.profile.classSubjects = this.getClassesSubjects(this.profile);
      this.getTutorGuarantorById(this.profile.id);
      this.getTutorMapById(this.profile.id);
      this.getTutorAddressById(this.profile.id);
    });
  }

  getTutorGuarantorById(id: any) {
    this.configService.getTutorGuarantorById(id).subscribe(data => {
      this.profile.guarantor = data;
    });
  }

  getTutorMapById(id: any) {
    this.configService.getTutorMapById(id).subscribe(data => {
      this.profile.map = data;
    });
  }

  getTutorAddressById(id: any) {
    this.configService.getTutorAddressById(id).subscribe(data => {
      this.profile.address = data.address;
    });
  }

  getClassesSubjects(profile: any) {
    let newProfile = {};

    profile.mapping.forEach(map => {
      newProfile[map.classGroup.name] ? // check if that array exists or not in newcars object
        newProfile[map.classGroup.name].push({ subject: map.subjectMaster.name })  // just push
        : (newProfile[map.classGroup.name] = [], newProfile[map.classGroup.name].push({ subject: map.subjectMaster.name }))
      // create a new array and push
    });
    return newProfile;
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
