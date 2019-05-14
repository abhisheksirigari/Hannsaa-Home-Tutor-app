import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class UserManagementService extends WebService<any>{

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getTutors(): Observable<any> {
    const options = {
      url: Routes.GET_TUTORS()
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
}

