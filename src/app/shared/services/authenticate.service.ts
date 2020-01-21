import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { WindowRefService } from './window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService extends WebService<any> {

  loginInfo: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    protected windowRef: WindowRefService) {
    super(httpClient);
  }

  register(model) {
    const options = {
      url: Routes.REGISTER(),
      params: model
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

  login(loginData: any, user: string): Observable<any> {
    const options = {
      url: Routes.LOGIN(),
      params: loginData
    };
    this.loginInfo = user;
    return this.httpClient.post(options.url, options.params)
      .pipe(map(data => {
        if (data && data['access_token']) {
          localStorage.setItem('token', JSON.stringify(data['access_token']));
          return data;
        }
      }));
  }

  getToken() {
    let obj = JSON.parse(localStorage.getItem('token'));
    if (obj) {
      return obj;
    } else {
      this.router.navigate(['login']);
    }
  }

  

  getUser() {
    return this.loginInfo;
  }

  
  isAuthenticated(): boolean {
    return true;
  }
  
  logout() {
    console.log('on logout end the loader');
    this.router.navigate(['login']);
  }
}
