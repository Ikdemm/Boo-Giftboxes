import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/authentication.service";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  resetPasswordForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthenticationService) { }

  ngOnInit() {
    this.initResetPasswordForm();
  }
  initResetPasswordForm(){
    this.resetPasswordForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  submitResetPassword() {
    this.authService.resetPassword(this.resetPasswordForm.get('email').value).subscribe(
        data=>{
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        },
        error => {
          console.log(error);
        }
    )
  }
  get f() {
    return this.resetPasswordForm.controls;
  }

}
