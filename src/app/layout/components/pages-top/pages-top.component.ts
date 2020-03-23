import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../shared/services/authenticate.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = '';
  userPost: string = 'Home Tutor';

  sidebarToggle: boolean = false;
  tip = { ring: true, email: true };

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  constructor(
    private router: Router,
    private _globalService: GlobalService,
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit() {
    this._sidebarToggle();
  }


  goToProfile() {
    const user = this.authenticateService.getUser();
    if (user && user.id) {
      this.router.navigate(["/profile/" + user.id]);      
    }
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }

  redirectToMessages() {
    this.router.navigate(["/messages"]);
  }

  redirectToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
