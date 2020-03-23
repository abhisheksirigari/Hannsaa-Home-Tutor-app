import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from '../../shared/services/tutor.service';
import { AuthenticateService } from '../../shared/services/authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileId: any;
  profile: any;

  constructor(
    private route: ActivatedRoute,
    private tutorService: TutorService,
    private authenticateService: AuthenticateService
    ) {
    this.route.params.subscribe(params => {
      this.profileId = params['id'];
      if (this.profileId) {
        this.getTutorProfile(this.profileId);
      }
    });
  }
  
  ngOnInit() { }

   getTutorProfile(id: any) {
     this.tutorService.getTutorsById(id).subscribe( data => {
       this.profile = data;
     });
   }

}
