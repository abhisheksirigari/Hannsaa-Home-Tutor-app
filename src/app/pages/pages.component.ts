import { Component } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent {
  loaderSubscription: Subscription;
  
  public sidebarToggle: boolean = true;
  public showLoader: boolean = false;

  constructor(
    public _globalService: GlobalService,
    private loaderService: LoaderService,
    private canonicalService: CanonicalService,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();

    this._sidebarToggle();    
    this.loaderSubscription = this.loaderService.contentLoadingCount.subscribe((counter: number) => {
      this.showLoader = counter > 0;
    });
  }

  setSideBarToggle() {
    if (!this.sidebarToggle) {
      this._sidebarToggle();
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
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }

}
