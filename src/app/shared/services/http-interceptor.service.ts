import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, catchError} from 'rxjs/operators';
import { Observable, throwError, of} from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthenticateService } from './authenticate.service';
import { HttpUserEvent } from '@angular/common/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { HttpProgressEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Routes } from '../classes/routes';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  access_token = null;
  headerEnccode: any;
  private refreshGrantType = 'refresh_token';

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private modalService: ModalService
  ) {
    
  }

  isAuthTokenRequest(url: string) {
    return (/token|authenticate|logout|freshtoken|registerEndUser|accept-invitation|assets/i).test(url);
  }

  isXadaService(url) {
    const apiURl = new RegExp(environment.baseUrl, 'gi');
    return (apiURl).test(url);
  }

  isTokenRequired(url) {
    return this.isXadaService(url) && !this.isAuthTokenRequest(url);
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
        this.authenticateService.logout();
        const msg = 'Bad Request, Please verify your login details';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 400 && err.statusText === 'invalid_grant') {
        this.authenticateService.logout();
        const msg = 'Invalid Grant, Please verify your login details';
        this.showError(msg);
        return throwError(err);
      } else if (err.status === 401 && err.statusText === 'Unauthorized') {
        this.authenticateService.logout();
        const msg = 'Unauthorized User, Please verify your login details';
        this.showError(msg);
      } else if (err.status === 401 && err['error']['error'] === 'invalid_client') {
        this.authenticateService.logout();
        const msg = 'Invalid User, Please verify your login details';
        this.showError(msg);
      } else if (err.status === 401 && err['error']['error'] === 'invalid_token') {
        
        // this.authenticateService.login(Routes.OAUTHTOKEN(), refreshUser).subscribe(data => {
        //   localStorage.setItem('access_token', data['access_token']);
        //   const refreshTokenReq = req.clone({
        //     setHeaders: {
        //       'Authorization': 'Bearer ' + data['access_token']
        //     }
        //   });
        //   location.reload();
        //   return of(err.message);
        //   // return next.handle(refreshTokenReq);
        // });
        const msg = 'Session Expired, Please login';
        this.showError(msg);
        this.authenticateService.logout();
      }

      const error = err.error.message || err.statusText;
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
