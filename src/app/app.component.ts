import { Component, NgZone, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isSpinnerVisible: boolean;
  title = 'Hannsaa';

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute,
    private location: LocationStrategy,
    protected windowRef: WindowRefService,
    private zone: NgZone
  ) {
    this.isSpinnerVisible = true;
  }

  ngOnInit() {
    // alert(navigator.userAgent);
    this.loadModules();
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.isSpinnerVisible = false;
        }
      });
  }

  loadModules() {
    const url = this.location.path();
    const isAuthenticated = this.authenticateService.isAuthenticated();
    if (isAuthenticated) {
      setTimeout(() => {
        this.router.navigate(['pages/dashboard']);
      }, 231500);
    } else {

    }
  }

}

