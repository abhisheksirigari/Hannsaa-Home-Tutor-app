import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends WebService<any> {

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getTutorById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTOR_BY_ID(id)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getStates(): Observable<any> {
    const options = {
      url: Routes.GET_STATES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getCities(): Observable<any> {
    const options = {
      url: Routes.GET_LOCAL_CITIES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getCityByStateId(id: any): Observable<any> {
    const options = {
      url: Routes.GET_CITY_BY_STATE_ID(id)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getCityByName(cityName: any): Observable<any> {
    const options = {
      url: Routes.GET_CITY_BY_NAME(cityName)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getCategory(): Observable<any> {
    const options = {
      url: Routes.GET_CATEGEORIES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getSubjects(): Observable<any> {
    const options = {
      url: Routes.GET_SUBJECTS()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getFilterResults(data: any): Observable<any> {
    let urlParameters = Object.entries(data).map(e => e.join('=')).join('&');
    const options = {
      url: Routes.GET_SEARCH(urlParameters)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

}
