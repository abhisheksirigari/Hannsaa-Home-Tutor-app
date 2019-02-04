
import {throwError as observableThrowError,  Observable ,  throwError as _throw } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class WebService<T> {
  private observable: Observable<T>;

  constructor(
    private http: HttpClient
  ) { }

  get(options: any): Observable<T> {
    this.observable = this.http
      .get<any>(options.url, {
        params: options.params
      })
      .pipe(map(response => {
        this.observable = null;
        return response;
      }))
      .pipe(catchError(this.handleError))
      .pipe(finalize(() => {
        
      }));

    return this.observable;
  }

  post(options: any): Observable<T> {
    this.observable = this.http.post<any>(options.url, options.params)
    .pipe(map(response => {
        return response;
      }))
      .pipe(catchError(this.handleError))
      .pipe(finalize(() => {
        
      }));
    return this.observable;
  }

  put(options: any): Observable<T> {
    this.observable = this.http.put<any>(options.url, options.params)
      .pipe(map(response => {
        return response;
      }))
      .pipe(catchError(this.handleError))
      .pipe(finalize(() => {
        
      }));
    return this.observable;
  }

  delete(options: any): Observable<T> {
    this.observable = this.http.delete<any>(options.url)
      .pipe(map(response => {
        return response;
      }))
      .pipe(catchError(this.handleError))
      .pipe(finalize(() => {
        
      }));
    return this.observable;
  }

  handleError(error: any) {
    return observableThrowError(error);
  }
}
