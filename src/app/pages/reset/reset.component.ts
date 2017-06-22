import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../theme/validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reset',
  templateUrl: './reset.html',
  styleUrls: ['./reset.scss']
})

export class Reset implements OnInit, OnDestroy{

  public form:FormGroup;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;
  public submitted:boolean = false;
  private urlParam:String;
  private sub:any;

  constructor(fb:FormBuilder, private route:ActivatedRoute) {
    this.form = fb.group({
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.urlParam = params['id'];
       console.log(this.urlParam);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }

}
