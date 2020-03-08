import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {MustMatch} from "../../../../core/helpers/custom-validators/must-match.validator";

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService) {

  }

  get f() {
    return this.changePasswordForm.controls;
  }

  ngOnInit() {
    this.initChangePasswordForm();
  }

  initChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
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

    this.authService.updatePassword(this.changePasswordForm.value).subscribe(
        data=>{
          console.log(data);
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));

        },err=>{
          console.log(err)
        })

  }

  onReset() {
    this.changePasswordForm.reset();
  }

}
