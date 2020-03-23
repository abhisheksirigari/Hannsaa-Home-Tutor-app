import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../../shared/services/authenticate.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      const loginData = {
        userId: this.loginForm.value.userId,
        password: this.loginForm.value.password
      };
      if (loginData.userId === 'admin' && loginData.password === 'Hansa123') {
        this.authenticateService.login(loginData, loginData.userId).subscribe(data => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        });
      } else {
        const modalOptions = {
          bodyText: 'Please verify your login details',
          actionButtonText: 'OK'
        };
        this.modalService.showErrorModal(modalOptions);
      }
    }
  }

}
