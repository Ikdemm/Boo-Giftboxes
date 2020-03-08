import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,private _router:Router) { }

  ngOnInit() {
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required]
    })
  }
  submitLogin(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe(
      data=>{
        console.log(data)
        this._router.navigate(['home'])
      },
      err=>{
        console.log(err)
      })
  }
  

}
