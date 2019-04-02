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

  editCategeories(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_CATEGEORIES(),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  addClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.ADD_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);    
  }

  editClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.EDIT_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.put(options.url, options.params).pipe(res => res);    
  }

  deleteClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.DELETE_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.request('delete', options.url, { body: options.params } ).pipe(res => res);    
  }

  addSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.ADD_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);    
  }

  editSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.EDIT_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.put(options.url, options.params).pipe(res => res);    
  }

  deleteSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.DELETE_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.request('delete', options.url, { body: options.params } ).pipe(res => res);    
  }

}
