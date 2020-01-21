import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student-enquiry',
  templateUrl: './view-student-enquiry.component.html',
  styleUrls: ['./view-student-enquiry.component.scss']
})
export class ViewStudentEnquiryComponent implements OnInit {

  seqId: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let seqIdURL = params['seqId']; // (+) converts string 'id' to a number
      this.seqId = decodeURI(seqIdURL);
      // this.seqId = seqIdURL.split('^').join('/');
   });    
  }

}
