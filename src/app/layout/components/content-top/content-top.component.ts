import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent {
  routeTitle: any;
  routeParent: any;

  constructor(
    private router: Router,
    private _location: Location,
    private route: ActivatedRoute,
    public _globalService: GlobalService) {
    this.getRouteTitle();
  }

  private getRouteTitle() {
    /* this._globalService.isActived$.subscribe(isActived => {
      this.routeTitle = isActived.title;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'isActived') {
        this.routeTitle = data.value.title;
        if (data.value.parent != '') {
          this.routeParent =  data.value.parent;
        } else {
          this.routeParent =  '';
        }        
      } else {
        // this.routeTitle = this._location.path();
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  returnHome() {
    //    this._globalService._isActived({ title: 'Dashboard' });
    this._globalService.dataBusChanged('isActived', { title: 'Dashboard' });
  }
}
