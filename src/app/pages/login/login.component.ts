import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../../shared/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.formBuilder.group({
      username: ['admin@hansa.com', [Validators.required, Validators.email]],
      password: ['admin', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.loginForm.valid) {
        const loginData = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        };
        this.router.navigate(['/dashboard']);
        // this.authenticateService.login(loginData, loginData.username).subscribe( data => {
        //   console.log(data);
        //   this.router.navigate(['/dashboard']);
        // });
      }            
    }
  }

}
