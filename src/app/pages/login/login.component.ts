import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationExtensions } from 'ng2-cli-validation-messages/ng2-fmv';
import { AuthService } from './../../services';


@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class Login implements OnInit {

  public form: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public submitted: boolean = false;
  public loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  public ngOnInit(): void {
    this.formBuild();
  }

  public formBuild(): void {
    this.username = this.fb.control('', [
      ValidationExtensions.required(),
      ValidationExtensions.minLength(4)
    ]);

    this.password = this.fb.control('', [
      ValidationExtensions.required(),
      ValidationExtensions.minLength(4)
    ]);

    this.form = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  public async onSubmit (values: any) {
    this.submitted = true;
    if (this.form.valid) {
      try {
        let res = await this.authService.login({username: values.username, password: values.password});
        if (res.success) {
          this.router.navigate(['/dashboard']);
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
