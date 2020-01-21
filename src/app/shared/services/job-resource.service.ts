import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobResourceService extends WebService<any> {

  constructor(
    private httpClient: HttpClient) {
    super(httpClient);
  }

  getStudentEnquiry(page: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_STUDENT_ENQUIRY(page, size)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  getStudentEnquiryById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_STUDENT_ENQUIRY_BY_ID(id)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  addStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.ADD_STUDENT_ENQUIRY(),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);    
  }

  editStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_STUDENT_ENQUIRY(data.id),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);    
  }

  deleteStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.DELETE_STUDENT_ENQUIRY(data.id),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }
}
