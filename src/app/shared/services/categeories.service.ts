import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategeoriesService extends WebService<any> {

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getConfigCategeories(): Observable<any> {
    const options = {
      url: Routes.GET_CONFIG_CATEGEORIES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getCategeories(): Observable<any> {
    const options = {
      url: Routes.GET_CATEGEORIES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }
}
