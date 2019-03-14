import { Component, Input, HostListener } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Hannsaa';
  userPost: string = 'Home Tutor';


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService) { }

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
  
  @HostListener('document:click', ['$event']) 
  clickedOutside(event: any) {
    // here you can hide your menu
    console.log("CLICKED OUTSIDE");
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
  }
}
