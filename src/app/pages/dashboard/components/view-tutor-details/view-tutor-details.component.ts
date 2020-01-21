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
  tutorDetails: any;

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
      this.tutorDetails = data;
    });
  }

}
