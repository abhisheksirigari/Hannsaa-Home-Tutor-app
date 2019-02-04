import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterEvent } from '@angular/router';
import { RouteConfigLoadStart } from '@angular/router';
import { RouteConfigLoadEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { AuthenticateService } from './shared/services/authenticate.service';
import { WindowRefService } from './shared/services/window-ref.service';

declare var window: any;

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Hannsaa';

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute,
    private location: LocationStrategy,
    protected windowRef: WindowRefService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    // alert(navigator.userAgent);
    this.loadModules();
  }

  loadModules() {
    const url = this.location.path();
    const isAuthenticated = this.authenticateService.isAuthenticated();
    if (isAuthenticated) {
      setTimeout(() => {
        this.router.navigate(['pages/index']);
      }, 500);
    } else {
      
    }
  }

}

