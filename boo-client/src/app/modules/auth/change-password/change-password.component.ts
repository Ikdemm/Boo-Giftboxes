import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {MustMatch} from "../../../core/helpers/custom-validators/must-match.validator";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  token:String;
  data:any;
  changePasswordForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,private activatedRoute: ActivatedRoute) {
    localStorage.removeItem('token');
    this.activatedRoute.params.subscribe(params=>{
      this.token = params['token'];
      this.data = this.authService.decodeReset(this.token);
      console.log(this.data);

    })

  }

  get f() {
    return this.changePasswordForm.controls;
  }

  ngOnInit() {
    this.initChangePasswordForm();
  }

  initChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      email: [{value:this.data['iss'],disabled:true}, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')

    })
  }

  submitNewPassword() {
    console.log("submitNewPassword");
    console.log(this.changePasswordForm.value);
    this.isSubmitted = true;
    localStorage.setItem('token',JSON.stringify(this.token));
    let changePassword={
      email:this.data['iss'],
      password: this.changePasswordForm.get('password').value,
      confirmPassword: this.changePasswordForm.get('confirmPassword').value
    }
    this.authService.changePassword(changePassword).subscribe(
        data=>{
          console.log(data);
          localStorage.removeItem('token');
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));

        },err=>{
          console.log(err)
        })

  }

  onReset() {
    this.changePasswordForm.reset();
  }

}
