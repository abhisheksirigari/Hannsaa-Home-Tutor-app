import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class TextResourcesService extends WebService<any>{

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    super(httpClient);
  }

  getAboutus(type: string): Observable<any> {
    const options = {
      url: Routes.GET_ABOUTUS(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  addAboutus(data: any) {
    const options = {
      url: Routes.ADD_ABOUTUS(data.textType),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  deleteAboutus(data: any) {
    const options = {
      url: Routes.DELETE_ABOUTUS(data.textType),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  getWhyus(type: string): Observable<any> {
    const options = {
      url: Routes.GET_WHYUS(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  addWhyus(data: any) {
    const options = {
      url: Routes.ADD_WHYUS(data.textType),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  deleteWhyus(data: any) {
    const options = {
      url: Routes.DELETE_WHYUS(data.textType),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  getPrivacyPolicy(type: string): Observable<any> {
    const options = {
      url: Routes.GET_PRIVACYPOLICY(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  addPrivacyPolicy(data: any) {
    const options = {
      url: Routes.ADD_PRIVACYPOLICY(data.textType),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  deletePrivacyPolicy(data: any) {
    const options = {
      url: Routes.DELETE_PRIVACYPOLICY(data.textType),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  getTermsNconditionsTutor(type: string): Observable<any> {
    const options = {
      url: Routes.GET_TERMSnCONDITIONSTUTOR(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  editTermsNconditionsTutor(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  deleteTermsNconditionsTutor(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  getTermsNconditionsStudent(type: string): Observable<any> {
    const options = {
      url: Routes.GET_TERMSnCONDITIONSTUTOR(type)
    };
    return this.httpClient.get(options.url).pipe(res => res);
  }

  editTermsNconditionsStudent(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  deleteTermsNconditionsStudent(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: {}
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  
}
