import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, catchError} from 'rxjs/operators';
import { Observable, throwError, of} from 'rxjs';

import { HttpUserEvent } from '@angular/common/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { HttpProgressEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Routes } from '../classes/routes';
import { environment } from '../../../environments/environment';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  
  constructor(
    private router: Router,
    private modalService: ModalService
  ) {}

  isHomeTutorService(url) {
    const baseUrl = new RegExp(environment.baseUrl, 'gi');
    return (baseUrl).test(url);
  }

  isTokenRequired(url) {
    return this.isHomeTutorService(url);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;

    authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    return next.handle(authReq).pipe(catchError( (err, caught) => {
      if (err.status === 400 && (err.statusText === 'OK' && err['error']['error'] === 'invalid_grant')) {
        const msg = 'Invalid User Details, Please validate by reCaptcha';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 400 && (err.statusText === 'OK')) {
        const msg = 'Invalid User, Please verify your login details';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 400 && (err.statusText === 'Bad Request')) {
        const msg = 'Bad Request, Please verify your login details';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 400 && err.statusText === 'invalid_grant') {
        const msg = 'Invalid Grant, Please verify your login details';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 401 && err.statusText === 'Unauthorized') {
        const msg = 'Unauthorized User, Please verify your login details';
        this.showError(msg);
      } else if (err.status === 401 && err['error']['error'] === 'invalid_client') {
        const msg = 'Invalid User, Please verify your login details';
        this.showError(msg);
      } else if (err.status === 401 && err['error']['error'] === 'invalid_token') {
        localStorage.removeItem('access_token');        
      }

      const error = err.message || err.error.message || err.statusText;
      this.showError(error);
      return of(error);
    }) as any);
  }

  showError(msg) {
    const modalOptions = {
      bodyText: msg,
      actionButtonText: 'OK'
    };
    this.modalService.showErrorModal(modalOptions);
  }
}
