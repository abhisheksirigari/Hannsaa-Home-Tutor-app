import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService extends WebService<any> {

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getFaqs(type: any): Observable<any> {
    const options = {
      url: Routes.GET_FAQ(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  addFaq(data: any): Observable<any> {
    const options = {
      url: Routes.ADD_FAQ(),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);    
  }

  editFaq(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_FAQ(),
      params: data
    };
    return this.httpClient.put(options.url, options.params).pipe(res => res);    
  }

  deleteFaq(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.DELETE_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.httpClient.request('delete', options.url, { body: options.params } ).pipe(res => res);    
  }
}
