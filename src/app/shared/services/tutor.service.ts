import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class TutorService extends WebService<any>{

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getTutors(currentPage: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTORS(currentPage, size)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getClasses(): Observable<any> {
    const options = {
      url: Routes.GET_CLASSES()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  updateClass(data) {
    const options = {
      url: Routes.POST_CLASS(),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  getSubjects(): Observable<any> {
    const options = {
      url: Routes.GET_SUBJECTS()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getNearByTutors(): Observable<any> {
    const options = {
      url: Routes.GET_NEAR_BY_TUTORS()
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getTutorsByCityMobile(city: any, mobileNumber: any, currentPage: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTORS_BY_CITY_MOBILE(city, mobileNumber, currentPage, size)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getTutorsByCity(city: any, currentPage: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTORS_BY_CITY(city, currentPage, size)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getTutorsByMobile(mobileNumber: any, currentPage: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTORS_BY_MOBILE(mobileNumber, currentPage, size)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

}

