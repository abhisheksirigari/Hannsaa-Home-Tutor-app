import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoader = false;
  loaderSubscription: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderSubscription = this.loaderService.contentLoadingCount.subscribe((counter: number) => {
      this.showLoader = counter > 0;
    });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }

}
