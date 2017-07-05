import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})

export class Login {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public loginError: boolean = false;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  public async onSubmit (values: any) {
    this.submitted = true;
    if (this.form.valid) {
      try {
        let res = await this.loginService.login({username: values.username, password: values.password});
        console.log(res);
        if (res.success) {
          // localStorage.setItem('id_token', res.data.token);
          this.router.navigate(['/pages']);
        } else {
          this.loginError = true;
        }
      }
      catch (e) {
        console.log(e.message);
      }
    }
  }
}
