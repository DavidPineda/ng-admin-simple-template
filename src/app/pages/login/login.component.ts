import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})

export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private loginService:LoginService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService
          .login({username: this.email.value, password: this.password.value})
          .map(res => res.json())
          .subscribe(
            res => {
              if (res.success) {
                localStorage.setItem('id_token', res.data.token);
              }
            },
            error => console.log(error)
          );
    }
  }

}
